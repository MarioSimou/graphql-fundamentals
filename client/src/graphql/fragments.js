import gql from 'graphql-tag'

export const LinkItem = gql`
fragment LinkItem on Link {
  id
  description
  url
  createdAt
  modifiedAt
}
`