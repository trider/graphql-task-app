// InState
const instate =  require('./instate/instate')

// Member
const member =  require('./member/member')

// Operator
const operator =  require('./operator/operator')

// Flowable
const flowable = require('./flowable/flowable')


// Portfolio
const portfolio = require('./portfolio/portfolio')

// DLT
const dlt = require('./dlt/dlt')

// odoo
const odoo = require('./odoo/odoo')


// mongo
const mongo = require('./mongo/mongo')

// mastercard
const masterCard = require('./masterCard/masterCard')



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