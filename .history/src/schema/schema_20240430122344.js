
const { gql } = require('apollo-server');
const { GraphQLObjectType, GraphQLString, graphqlSync } = require('graphql')
const GraphQLObjectId = require('graphql-scalar-objectid')
const GraphQLJSON = require('graphql-type-json');

const typeDefs = gql`
  scalar GraphQLObjectId
  scalar JSON
  scalar Date


  

  type Query {
    # app
    appQuery(api:String, payload:JSON): JSON
    
    
    # Users
    getUsers(payload:JSON): JSON
    getUser(payload:JSON): JSON
    
    # Tasks
    getTasks(payload:JSON): JSON
    getTask(payload:JSON): JSON
  }



  type Mutation {
    # app
    appLogin(payload:JSON): JSON
    appRun(api:String, payload:JSON): JSON


    # Users
    login(payload:JSON): JSON
    createUser(payload:JSON): JSON
    updateUser(payload:JSON): JSON
    deleteUser(payload:JSON): JSON

    # Tasks
    createTask(payload:JSON): JSON
    updateTask(payload:JSON): JSON
    deleteTask(payload:JSON): JSON
    deleteAllTasks(payload:JSON): JSON
  
  }


`;

module.exports = typeDefs;