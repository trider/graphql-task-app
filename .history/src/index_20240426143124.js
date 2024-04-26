#!/usr/bin/env node
const { ApolloServer } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers')
const dataSources = require('./datasources')
const MongoAPI = require('./datasources/mongo/mongo');
const config =require('./config/config.json')
const globalVars =require('./global/global-vars.json')
const version = globalVars.appVersion
const mongoAPI = new MongoAPI()



const getData = async(req)=>{

	let isAuthenticated = false
	const token = req.headers.Authorization || req.headers.authorization || req.headers.token || '';
	const role = req.headers.role || ''

	return await  mongoAPI.getItemData({ db: 'graphDB', collection: 'membersList', query: {token:token} }).then(member =>{
		let isAuthenticated = false
		if(member.token === token)isAuthenticated = true
				return {
					token:token,
					role:role,
					isAuthenticated:isAuthenticated
				}
	
	}).catch(err=>{

		return {
			token:token,
			role:role,
			isAuthenticated:true,
		}
})
		

}



const _getUser = async (req) => {



	return getData( req).then(data => {
		// console.log(data, '\n')
		return {
			 user:data,
				...req

		}
	}).catch(err=>{

				return {
					user:{
						token:token,
						memberToken:token,
						isAuthenticated:true,
					},
					...req
					
				}
		})


}

const getUser = async (req) => {
	let isAuthenticated = false
	const token = req.headers.Authorization || req.headers.authorization || req.headers.token || null;
	const role = req.headers.role || ''

	if(token !== null)isAuthenticated = true

	return {
		user:{
			token:token,
			role:role,
			isAuthenticated:isAuthenticated,
		},
		...req.headers
	}



}

const server = new ApolloServer({
	typeDefs,  
	resolvers,
	dataSources: dataSources,
	context: ({ req }) => {
	
		return getUser(req).then(user =>{
			// console.log('serverContext', user.user)
			return user
		});
		
		}
 });



server.listen('4003').then(({ url }) => {
	console.log(`test message`);
	console.log(`🚀  MVDS Task App Version ${version}\nServer ready at ${url}`);
});
