
// const CSVToJSON = require('csvtojson');
const { parse } = require('graphql');
const { ObjectID } = require('mongodb');
const { get } = require('mongoose');



const users = {

	Query: {
    getUsers: async (parent, args, { dataSources }, context) => {
      const getData = new Promise((resolve) => {
        dataSources.mongoAPI.getItemsData(
          { db: 'tasksDB', collection: 'users', query: {  } }
        ).then((data, err) => resolve(data))
      }).then((data) => {
        return data

      })
      return getData.then(data => data).catch((err) => console.log(err))
    },
    getUser: async (parent, args, { dataSources }, context) => {
      const getData = new Promise((resolve) => {
        dataSources.mongoAPI.getItemData(
          { db: 'tasksDB', collection: 'users', query: { "userName": args.payload.userName } }
        ).then((data, err) => resolve(data))
      }).then((data) => {
        return data

      })
      return getData.then(data => data).catch((err) => console.log(err))
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
      let users = null
      let userId = null
      const getData = new Promise((resolve) => {
        dataSources.mongoAPI.getItemsData(
          { db: 'tasksDB', collection: 'users', query: {} }
        ).then((data, err) => resolve(data))

      }).then((data) => {
        users = data
        userId = users.length + 1
        return dataSources.mongoAPI.writeItemData({
          db: 'tasksDB',
          collection: 'users',
          data: {
            ...args.payload,
            userId: userId,
            created: new Date(),
            updated: new Date(),
            isActive: true

          }
        })
      }).then((data) => {
        return dataSources.mongoAPI.getItemData(
          { db: 'tasksDB', collection: 'users', query: { "userId": userId } }
        )
      })
      return getData.then(data => data).catch((err) => {
        console.log(err)
      })
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