import React from 'react'

import {Link} from 'react-router-dom'
import './Nav.css'
import {BsFillCartPlusFill} from 'react-icons/bs'


const Nav = () => {
  return (
    <>
    <div className="navbar">
    <Link to="/" id="menu">Home</Link>
    <Link to="/Signup" id="menu">Register</Link>
    <Link to="/Login" id="menu">Login</Link>
    <Link to="/Cart" id="menu"><BsFillCartPlusFill/></Link>
    <Link to="/User" id="menu">User</Link>
    <Link to="/Admin" id="menu">Admin</Link>
    
    
    </div>
    </>
  )
}

export default Nav