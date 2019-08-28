import React from 'react'
import Link from './Link'
import { useQuery } from '@apollo/react-hooks'
import { LINKS_QUERY } from '../graphql/queries'

const LinkList = () => {
  const [links,setLinks] = React.useState([])
  const { data, loading, refetch } = useQuery( LINKS_QUERY, { fetchPolicy: 'cache-and-network'} )
  // const onClickRefresh = () => refetch().then(({data}) => setLinks(data.links))
  
  if( loading ) return <div>Loading...</div>
  if(data && data.links && data.links.links.length !== links.length ) setLinks(data.links.links)


  return (
    <>
    <div>Length: {links.length} </div>
    <div id="link-list">
      { links.map( link => <Link key={link.id} link={link}></Link> )}
    </div>
    {/* <button onClick={onClickRefresh}>Refresh</button> */}
    </>
  )
}

export default LinkList