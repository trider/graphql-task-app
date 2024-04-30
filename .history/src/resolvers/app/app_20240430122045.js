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
		return tasks.Mutation.login(parent, args, {dataSources}, context)
 },
	appRun: async (parent, args, { dataSources }, context) => {
			return utilsInstate.inStateRun(parent, args, dataSources, context)
		},
	
	
	},
};

module.exports = resolvers;





