
// const CSVToJSON = require('csvtojson');
const { parse } = require('graphql');
const { ObjectID } = require('mongodb');
const { get } = require('mongoose');



const tasks = {

	Query: {
  getTasks: async (parent, args, { dataSources }, context) => {
    const getData = new Promise((resolve) => {
      dataSources.mongoAPI.getItemsData(
        { db: 'tasksDB', collection: 'tasks', query: { 
          user:args.payload.user,
         } }
      ).then((data, err) => resolve(data))
    }).then((data) => {
     return data

    })
    return getData.then(data => data).catch((err) => console.log(err))
		},
  getTask: async (parent, args, { dataSources }, context) => {
    const getData = new Promise((resolve) => {
      dataSources.mongoAPI.getItemData(
        { db: 'tasksDB', collection: 'tasks', query: { "_id": ObjectID(payload.args.id) } }
      ).then((data, err) => resolve(data))
    }).then((data) => {
     return data

    })
    return getData.then(data => data).catch((err) => console.log(err))
  },
  
	



	},
 Mutation: {
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