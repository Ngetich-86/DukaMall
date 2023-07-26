import React from 'react'

import {Link} from 'react-router-dom'
import './Nav.css'
import {BsFillCartPlusFill} from 'react-icons/bs'
import {AiOutlineUserSwitch} from 'react-icons/ai'
import {AiOutlineLogout} from 'react-icons/ai'
import { Context } from '../../Context/useContent/Context';
import { useContext } from 'react'
const Nav = () => {
  const {cartItems} = useContext(Context);

  const { user } = useContext(Context);

  return (
    <>
    <div className="navbar">
    <div className="logo">
          <h3>Duka_Mall🎉</h3>
        </div>
    <Link to="/" id="menu">Shop</Link>
    {!user?(
    <Link to="/Signup" id="menu">Sign Up</Link>
    ) : null}
    
    <Link to="/Login" id="menu">Login</Link>
   
    <Link to="/Cart" id="menu"><BsFillCartPlusFill/>
    {/* <span>3</span> */}
    </Link>
    {/* {!user?( */}
      <>
       <Link to="/User" id="menu"><AiOutlineUserSwitch/></Link>
    <Link to="/Admin" id="menu">Admin</Link>
      </>
    {/* ) : null} */}
    
    {user && (
    <Link to="/Logout" id="menu"><AiOutlineLogout/></Link>
    )}
    
    
    
    </div>
    </>
  )
}

export default Nav