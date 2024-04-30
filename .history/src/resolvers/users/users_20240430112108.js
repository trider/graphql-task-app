
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
  createUser: async (parent, args, { dataSources }, context) => {
   return args
  },
  updateUser: async (parent, args, { dataSources }, context) => {
   return args
  },
  deleteUser: async (parent, args, { dataSources }, context) => {
   return args
  },

		


	},


};

module.exports = users;