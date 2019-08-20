import gql from 'graphql-tag'

export default gql `
type Query {
  links(data:LinkDataInput): [Link]!
}
type Mutation {
  createLink(data:LinkCreateDataInput!): Link!
}

type Link implements Node & Timestamp {
  id: ID!
  description: String!
  url: String!
  createdAt: String!
  modifiedAt: String!
}

input LinkDataInput {
  id: ID
  description: String
  url: String
}
input LinkCreateDataInput {
  description: String!
  url: String!
}

interface Node {
  id: ID!
}

interface Timestamp {
  createdAt: String!
  modifiedAt: String!
}
`