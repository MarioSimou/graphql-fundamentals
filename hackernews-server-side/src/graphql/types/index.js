import gql from 'graphql-tag'

export default gql `
type Query {
  links(data:LinkDataInput): [Link]!
}
type Mutation {
  createLink(data:LinkCreateDataInput!): Link!
  createUser(data:UserCreateInput!): UserAuthResponse!
  loginUser(data:UserLoginInput!): UserAuthResponse!
}

type User implements Node & Timestamp {
  id: ID!
  username: String!
  email: String!
  password: String!
  createdAt: String!
  updatedAt: String!
}

type Link implements Node & Timestamp {
  id: ID!
  description: String!
  url: String!
  createdAt: String!
  updatedAt: String!
}

type UserAuthResponse implements Response {
  status: Int!
  success: Boolean!
  message: String!
  token: String
  user: User
}

input UserLoginInput {
  email: String!
  password: String!
}

input UserCreateInput {
  username: String!
  email: String!
  password: String!
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
  updatedAt: String!
}

interface Response {
  status: Int!
  success: Boolean!
  message: String!
}
`