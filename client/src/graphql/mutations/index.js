import gql from 'graphql-tag'
import {
  LinkItem,
  UserItem
} from '../fragments'
import f from '../../utils/fragments'

export const CREATE_LINK_MUTATION = gql`
mutation createLink($data:LinkCreateDataInput!){
  createLink(data:$data){
    ${f.spreadFragment(LinkItem,f.searchProperty)}
  }
}
${f.listFragment(LinkItem,'Link',f.searchProperty)}
`

export const CREATE_USER = gql`
mutation createUser($data:UserCreateInput!){
  createUser(data:$data){
    status
    success
    message
    token
    user {
      ${f.spreadFragment(UserItem,f.searchProperty)}
    }
  }
}
${f.listFragment(UserItem,'User',f.searchProperty)}
`

export const LOGIN_USER = gql`
mutation loginUser($data:UserLoginInput!){
  loginUser(data:$data){
    status
    success
    message
    token
    user {
      ${f.spreadFragment(UserItem,f.searchProperty)}
    }
  }
}
${f.listFragment(UserItem,'User',f.searchProperty)}
`