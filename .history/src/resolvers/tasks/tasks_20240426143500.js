
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
  writeMongoData: async (parent, args, { dataSources }, context) => {
			return dataSources.mongoAPI.writeItemData(args)
		},
  
		


	},


};

module.exports = mongo;