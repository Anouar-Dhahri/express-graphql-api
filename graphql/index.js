const { 
  GraphQLInt, 
  GraphQLString, 
  GraphQLList, 
  GraphQLObjectType,
  GraphQLSchema
} = require('graphql')

const Person = require('./../models/Person');

const PersonType = require('./TypeDefs');

const RootQuery = new GraphQLObjectType({
  name:'RootQuery',
  fields:{
    getAllPeaple :{
      type:GraphQLList(PersonType),
      resolve: (root, args, context, info) => {
        const data = Person.find({})
        return data
      }
    },
    findPerson: {
      type: PersonType,
      args: {
        id: { type: GraphQLString }
      },
      resolve:(root, args, context, info) => {
        const data = Person.findById(args.id) 
        return data
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name:'Mutation',
  fields: {
    addPerson: {
      type:PersonType,
      args: {
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt }
      },
      resolve: (root, args, context, info) => {
        const data = new Person({
          firstname:args.firstname,
          lastname:args.lastname,
          email:args.email,
          age:args.age
        });
        data.save()
        return data
      }
    },
    updatePerson: {
      type:PersonType,
      args: {
        id: { type: GraphQLString },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type: GraphQLInt }
      },
      resolve: (root, args, context, info) => {
        const data = Person.findByIdAndUpdate(args.id, 
          {
            $set: {
              firstname: args.firstname, 
              lastname: args.lastname,
              email: args.email,
              age:args.age
            }
          }
        )
        return data
      }
    },
    deletePerson: {
      type:PersonType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (root, args, context, info) => {
        const data = Person.findOneAndDelete(args.id)
        return data
      }
    }
  }
})

const schema = new GraphQLSchema({query: RootQuery, mutation: Mutation})

module.exports = schema