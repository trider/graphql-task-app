const tasks = require('../tasks/tasks')
const users = require('../users/users') 


const member = require('../member/member')



const resolvers = {

	Query: {

		appRead: async (parent, args, { dataSources }, context) => {
			
   if (args.api === 'tasks') {
    return member.Query[args.command](parent, args, { dataSources }, context)
  }
  else if (args.role === 'operator') {
    return operator.Query[args.command](parent, args, { dataSources }, context)
  }
			
		},
		
	
	},


	Mutation: {
	appRun: async (parent, args, { dataSources }, context) => {
			return utilsInstate.inStateRun(parent, args, dataSources, context)
		},
	
	
	},
};

module.exports = resolvers;





