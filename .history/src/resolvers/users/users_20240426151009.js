
// const CSVToJSON = require('csvtojson');
const { parse } = require('graphql');
const { ObjectID } = require('mongodb');
const { get } = require('mongoose');



const users = {

	Query: {
    getMembers: async (parent, args, { dataSources }, context) => {
  
	



	},
 Mutation: {
  login: async (parent, args, { dataSources }, context) => {
   return args
  },

		


	},


};

module.exports = users;