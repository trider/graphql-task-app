const tasks = require('../tasks/tasks')
const users = require('../users/users') 


const member = require('../member/member')



const resolvers = {

	Query: {

		appRead: async (parent, args, { dataSources }, context) => {
			
			return utilsInstate.inStateRead(parent, args, dataSources, context)
		},
		
	
	},


	Mutation: {
 appLogin: async (parent, args, { dataSources }, context) => {
			console.log(args)
   return utilsInstateLogin.runInstateLogin(parent, args, dataSources, context)
 },
		app: async (parent, args, { dataSources }, context) => {
			return utilsInstate.inStateRun(parent, args, dataSources, context)
		},
	
	
	},
};

module.exports = resolvers;





