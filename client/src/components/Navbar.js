import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div id="navbar" >
      <Link to="/">Home</Link>
      <Link to="/link/new">Create Link</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>  
  )
}

export default Navbar