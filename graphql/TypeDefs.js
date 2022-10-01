const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const PersonType = new GraphQLObjectType({
  name:'Person',
  fields:() => ({
    _id: { type: GraphQLString },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    age:{ type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })    
})

module.exports = PersonType