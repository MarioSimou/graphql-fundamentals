import React from 'react'
import { HELLO } from '../graphql/queries'
import { useQuery } from 'react-apollo-hooks'

const Home = () => {
  const { data } = useQuery( HELLO , { suspend: true } )

  return (
    <div>
      { data.hello }
    </div>
  )
}

export default Home