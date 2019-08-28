import gql from 'graphql-tag'
import {
  LinkItem
} from '../fragments'
import f from '../../utils/fragments'

export const LINKS_QUERY = gql`
query links($data:LinkDataInput){
  links(data:$data){
    status
    success
    message
    links {
      ${f.spreadFragment( LinkItem , f.searchProperty )}
    }
  }
}
${f.listFragment( LinkItem, 'Link' , f.searchProperty )}
`