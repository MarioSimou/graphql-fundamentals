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

export const UserItem = gql`
fragment UserItem on User {
  id
  username
  email
  password
}

`