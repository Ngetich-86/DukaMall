import React from 'react'
import './Mainnav.css'
import Analytics from '../Components/Analytics/Analytics'
import Product from './Product/Product'
import Users from './Allusers/Users'
import { useContext } from 'react'
import { Context } from '../Context/applyContext/context' 
const Mainnav = () => {
  const { ui} = useContext(Context);
  return (
    <div className="mainnav">
       {
        ui === 'analytics' ?(
      <div className="analytics">
          <h2>Analytics</h2>
          <Analytics />
        </div>
        ) : ui === 'product' ? (

        <div className="product">
          {/* <h1>Add and delete products</h1> */}
          <Product />
        </div>
        ) : ui === 'view' ?(

        <div className="view-users">
          <h3>Track shipping and payment</h3>
          <Users />
        </div>
        ) : null
        }
    </div>
  )
}

export default Mainnav