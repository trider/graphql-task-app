#!/usr/bin/env node
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers')
const dataSources = require('./datasources')
const config	= require('./config/config.json')
const version = globalVars.appVersion



const server = new ApolloServer({
	typeDefs,  
	resolvers,
	dataSources: dataSources,
	context: ({ req }) => {}
 });



server.listen('4021').then(({ url }) => {
	console.log(`\n************************************************************`);
	console.log(`🚀  MVDS Task App Version ${version}\nServer ready at ${url}`);
	console.log(`************************************************************\n`);
});
