import gql from 'graphql-tag'

export const LinkItem = gql`
fragment LinkItem on Link {
  id
  description
  url
  created_at
  modified_at
}
`