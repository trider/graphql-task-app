const tasks = require('../tasks/tasks')
const users = require('../users/users')


const member = require('../member/member')



const resolvers = {

 Query: {

  appRead: async (parent, args, { dataSources }, context) => {

   if (args.api === 'tasks') {
    return tasks.Query[args.command](parent, args, { dataSources }, context)
   }
   else if (args.api === 'users') {
    return users.Query[args.command](parent, args, { dataSources }, context)
   }

  },


 },


 Mutation: {
  appRun: async (parent, args, { dataSources }, context) => {
   if (args.api === 'tasks') {
    return tasks.Mutation[args.command](parent, args, { dataSources }, context)
   }
   else if (args.api === 'users') {
    return users.Mutation[args.command](parent, args, { dataSources }, context)
   }
  },


 },
};

module.exports = resolvers;





