import React from 'react'
import Link from './Link'
import { useQuery} from 'react-apollo-hooks'
import { LINKS_QUERY } from '../graphql/queries'

const LinkList = () => {
  const { data, error } = useQuery( LINKS_QUERY, { variables: { }, suspend: true } )
  
  console.log(data)
  return (
    <div id="link-list">
      { data.links.map( link => <Link key={link.id} link={link}></Link> )}
    </div>
  )
}

export default LinkList