// InState
const tasks =  require('./tasks/tasks')






module.exports = {
	Query: {
		...tasks.Query,
	},
	Mutation: {
		...tasks.Mutation,
	},
	}
};