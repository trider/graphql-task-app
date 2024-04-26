
const { gql } = require('apollo-server');
const { GraphQLObjectType, GraphQLString, graphqlSync } = require('graphql')
const GraphQLObjectId = require('graphql-scalar-objectid')
const GraphQLJSON = require('graphql-type-json');

const typeDefs = gql`
  scalar GraphQLObjectId
  scalar JSON
  scalar Date


  

  type Query {
    getMembers(payload:JSON): JSON
    getMember(payload:JSON): JSON
    
    getTasks(payload:JSON): JSON
    getTask(payload:JSON): JSON
  }



  type Mutation {
    login(payload:JSON): JSON
    createMember(payload:JSON): JSON
    updateMember(payload:JSON): JSON
    deleteMember(payload:JSON): JSON


    createTask(payload:JSON): JSON
    updateTask(payload:JSON): JSON
    deleteTask(payload:JSON): JSON
    deleteAllTasks(payload:JSON): JSON
  
  }


`;

module.exports = typeDefs;