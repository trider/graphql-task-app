
// const CSVToJSON = require('csvtojson');
const { parse } = require('graphql');
const { ObjectID } = require('mongodb');
const { get } = require('mongoose');



const tasks = {

	Query: {
  getTasks: async (parent, args, { dataSources }, context) => {
    const getData = new Promise((resolve) => {
      dataSources.mongoAPI.getItemData(
        { db: 'tasksDB', collection: 'tasks', query: {  } }
      ).then((data, err) => resolve(data))
    }).then((data) => {
     return data

    })
    return getData.then(data => data).catch((err) => console.log(err))
		},
  getTask: async (parent, args, { dataSources }, context) => {
    const getData = new Promise((resolve) => {
      dataSources.mongoAPI.getItemData(
        { db: 'tasksDB', collection: 'users', query: { "email": args.payload.email, "password": args.payload.password } }
      ).then((data, err) => resolve(data))
    }).then((data) => {
      if(data !== null) {
        return {
          ...data,
          status: "User found",
          isAuthenticated: true
        }

      }
      else{
        return {
          status: "User not found",
          isAuthenticated: false
        }
      }

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