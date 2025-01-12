#!/usr/bin/env node
const { ApolloServer } = require('apollo-server');
// // const { createServer } = require('createServer');
// const { execute, subscribe } = require('graphql');
// const { SubscriptionServer } = require('subscriptions-transport-ws') ;
// const { makeExecutableSchema } = require('@graphql-tools/schema') ;
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers')
const dataSources = require('./datasources')
const config	= require('./config/config.json')
const version = config.appVersion



const server = new ApolloServer({
	typeDefs,  
	resolvers,
	dataSources: dataSources,
	context: ({ req }) => {}}
);



server.listen('4021').then(({ url }) => {
	console.log(`\n************************************************************`);
	console.log(`🚀  MVDS Task App Version ${version}\nServer ready at ${url}`);
	console.log(`************************************************************\n`);
});
