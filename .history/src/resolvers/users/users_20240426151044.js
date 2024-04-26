
// const CSVToJSON = require('csvtojson');
const { parse } = require('graphql');
const { ObjectID } = require('mongodb');
const { get } = require('mongoose');



const users = {

	Query: {
    getUsers: async (parent, args, { dataSources }, context) => {
      return args
    },
    getUser: async (parent, args, { dataSources }, context) => {
      return args
    },

	



	},
 Mutation: {
  login: async (parent, args, { dataSources }, context) => {
   return args
  },

		


	},


};

module.exports = users;