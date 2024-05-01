
// const CSVToJSON = require('csvtojson');
const { parse } = require('graphql');
const { ObjectID } = require('mongodb');
const { get } = require('mongoose');



const tasks = {

	Query: {
  getTasks: async (parent, args, { dataSources }, context) => {
    const getData = new Promise((resolve) => {
      dataSources.mongoAPI.getItemsData(
        { db: 'tasksDB', collection: 'tasks', query: { user:args.payload.user }}
      ).then((data, err) => resolve(data))
    }).then((data) => {
     return data

    })
    return getData.then(data => data).catch((err) => console.log(err))
		},
  getTask: async (parent, args, { dataSources }, context) => {
    const getData = new Promise((resolve) => {
      dataSources.mongoAPI.getItemData(
        { db: 'tasksDB', collection: 'tasks', query: { "_id": ObjectID(args.payload.id) } }
      ).then((data, err) => resolve(data))
    }).then((data) => {
     return data

    })
    return getData.then(data => data).catch((err) => console.log(err))
  },
  
	



	},
 Mutation: {
  createTask: async (parent, args, { dataSources }, context) => {
    let tasks = null
    let taskId = null
    const getData = new Promise((resolve) => {
      dataSources.mongoAPI.getItemsData(
        { db: 'tasksDB', collection: 'tasks', query: {  }}
      ).then((data, err) => resolve(data))

    }).then((data) => {
      tasks = data
      taskId = tasks.length + 1
      return dataSources.mongoAPI.writeItemData({
        db: 'tasksDB',
        collection: 'tasks',
        data: {
          ...args.payload,
          taskId: taskId,
          created: new Date(),
          updated: new Date(),
          isActive:true

        }
      })
    }).then((data) => {
      return dataSources.mongoAPI.getItemData(
        { db: 'tasksDB', collection: 'tasks', query: { "taskId": taskId } }
      )
    })
    return getData.then(data => data).catch((err) => {
      console.log(err)
    })
  },
  updateTask: async (parent, args, { dataSources }, context) => {
   const getData = new Promise((resolve) => {
    id = args.payload.id
    delete(args.payload.id)
    dataSources.mongoAPI.updateItemData(
      { db: 'tasksDB', collection: 'tasks', query: { 
        "_id": ObjectID(id) }, data: { $set: { ...args.payload, updated: new Date() } } }
    ).then((data, err) => resolve(data))  
  }).then((data) => {
    console.log(data)
    return dataSources.mongoAPI.getItemData(
      { db: 'tasksDB', collection: 'tasks', query: { "_id": ObjectID(id)  } }
    )
  })
  return getData.then(data => data).catch((err) => {
    console.log(err)
  })

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