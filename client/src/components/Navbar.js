import React from 'react'
import { Link } from 'react-router-dom'
import history from '../utils/history'
import { client } from '../utils/client'

const Navbar = ({isSigned,setIsSigned}) => {
  const onClickLogout = () => {
    sessionStorage.clear()
    client.clearStore()
    .then(()=> {
      client.resetStore()
      setIsSigned(false)
      history.push('/login')  
    })
  }

  return (
    <div id="navbar" >
      <div>
        <Link to="/">Home</Link>
        <Link to="/link/new">Create Link</Link>
      </div>
      <div>
        {!isSigned &&<Link to="/login">Log in</Link>}
        {isSigned && <Link to="/" onClick={onClickLogout}>Logout</Link>}
      </div>
    </div>  
  )
}

export default Navbar