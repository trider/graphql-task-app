
const { gql } = require('apollo-server');
const { GraphQLObjectType, GraphQLString, graphqlSync } = require('graphql')
const GraphQLObjectId = require('graphql-scalar-objectid')
const GraphQLJSON = require('graphql-type-json');

const typeDefs = gql`
  scalar GraphQLObjectId
  scalar JSON
  scalar Date


  

  type Query {

    getTasks(payload:JSON): JSON
  

  }



  type Mutation {
    
    createTask(payload:JSON): JSON
    updateTask(payload:JSON): JSON
    deleteTask(payload:JSON): JSON
    deleteAllTasks(payload:JSON): JSON
  

  
  }


`;

module.exports = typeDefs;