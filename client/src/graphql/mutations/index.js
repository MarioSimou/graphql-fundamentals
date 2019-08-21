import gql from 'graphql-tag'
import {
  LinkItem
} from '../fragments'
import f from '../../utils/fragments'

export const CREATE_LINK_MUTATION = gql`
mutation createLink($data:LinkCreateDataInput!){
  createLink(data:$data){
    ${f.spreadFragment(LinkItem,f.searchProperty)}
  }
}
${f.listFragment(LinkItem,f.searchProperty)}
`