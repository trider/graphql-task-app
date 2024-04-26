
// const CSVToJSON = require('csvtojson');
const { parse } = require('graphql');
const { ObjectID } = require('mongodb');
const { get } = require('mongoose');



const tasks = {

	Query: {
  getTasks: async (parent, args, { dataSources }, context) => {
			return args
		},
  getTask: async (parent, args, { dataSources }, context) => {
   return args
  },
  
	



	},
 Mutation: {
  login: async (parent, args, { dataSources }, context) => {
   return args
  },
  createTask: async (parent, args, { dataSources }, context) => {
   return args
  },
  updateTask: async (parent, args, { dataSources }, context) => {
   return args
  },
  deleteTask: async (parent, args, { dataSources }, context) => {
   return args
  },
  deleteAllTasks: async (parent, args, { dataSources }, context) => {
   return args
  },
		


	},


};

module.exports = tasks;