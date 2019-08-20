import gql from 'graphql-tag'
import {
  LinkItem
} from '../fragments'
import f from '../../utils/fragments'

export const LINKS_QUERY = gql`
query links($data:LinkDataInput){
  links(data:$data){
    ${f.spreadFragment( LinkItem , f.searchProperty )}
  }
}
${f.listFragment( LinkItem, f.searchProperty )}
`