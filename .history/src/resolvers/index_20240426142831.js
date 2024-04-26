// InState
const tasks =  require('./tasks/tasks')






module.exports = {
	Query: {
		...instate.Query,
		...member.Query,
		...operator.Query,
		...flowable.Query,
		...dlt.Query,
		...odoo.Query,
		...mongo.Query,
		...portfolio.Query,
		...masterCard.Query,

	},
	Mutation: {
		...instate.Mutation,
		...member.Mutation,
		...operator.Mutation,
		...dlt.Mutation,
		...odoo.Mutation,
		...flowable.Mutation,
		...mongo.Mutation,
		...portfolio.Mutation,
		...masterCard.Mutation,
	}
};