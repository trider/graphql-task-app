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


const server = new ApolloServer({
	typeDefs,  
	resolvers,
	dataSources: dataSources,
	context: ({ req }) => {
	
		
		
		}
 });



server.listen('4003').then(({ url }) => {
	console.log(`test message`);
	console.log(`🚀  MVDS Task App Version ${version}\nServer ready at ${url}`);
});
