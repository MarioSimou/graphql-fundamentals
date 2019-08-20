import gql from 'graphql-tag'

export default gql `
type Query {
  links(data:LinkDataInput): [Link]!
}

type Link implements Node & Timestamp {
  id: ID!
  description: String!
  url: String!
  created_at: String!
  modified_at: String!
}

input LinkDataInput {
  id: ID
  description: String
  url: String
}

interface Node {
  id: ID!
}

interface Timestamp {
  created_at: String!
  modified_at: String!
}
`