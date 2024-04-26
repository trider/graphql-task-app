#!/usr/bin/env node
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers')
const dataSources = require('./datasources')
const globalVars =require('./global/global-vars.json')
const version = globalVars.appVersion



const server = new ApolloServer({
	typeDefs,  
	resolvers,
	dataSources: dataSources,
	context: ({ req }) => {}
 });



server.listen('4021').then(({ url }) => {
	console.log(`************************************************************`);
	console.log(`🚀  MVDS Task App Version ${version}\nServer ready at ${url}`);
	console.log(`************************************************************`);
});
