
// const CSVToJSON = require('csvtojson');
const { parse } = require('graphql');
const { ObjectID } = require('mongodb');
const { get } = require('mongoose');



const tasks = {

	Query: {
  getTasks: async (parent, args, { dataSources }, context) => {
			
		},
  
	



	},
 Mutation: {
  writeMongoData: async (parent, args, { dataSources }, context) => {
			return dataSources.mongoAPI.writeItemData(args)
		},
  
		


	},


};

module.exports = mongo;