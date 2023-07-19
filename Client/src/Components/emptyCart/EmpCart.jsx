import React from 'react'
import { Link } from 'react-router-dom'
const EmpCart = () => {
  return (
    <>
    <h1>Your cart is empty🤔</h1>
    <Link to= '/'>
       <a href="/"><button type="submit" className='btn-shop'>Shop Now</button></a>
         </Link> 
    </>

    
  )
}

export default EmpCart