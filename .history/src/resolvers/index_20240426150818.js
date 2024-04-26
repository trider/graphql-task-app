// InState
const tasks =  require('./tasks/tasks')
const users	=  require('./users/users')






module.exports = {
	Query: {
		...tasks.Query,
		...users.Query,
	},
	Mutation: {
		...tasks.Mutation,
		...users.Mutation,
	}
};