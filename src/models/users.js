
const { Schema, model } = require('mongoose');
const { GraphQLObjectType, GraphQLString } = require('graphql')
const GraphQLObjectId = require('graphql-scalar-objectid')
const GraphQLJSON = require('graphql-type-json');

const userSchema = new Schema({
	name: String,
	email: String,
	password: String,
	role: String,
	avatar: String,
	analyis: GraphQLObjectId,
	filter: GraphQLObjectId,
 token:String
});

module.exports = model('User', userSchema);