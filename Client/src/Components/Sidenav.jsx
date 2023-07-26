import React from 'react'
import './Sidenav.css'
import {DiGoogleAnalytics} from 'react-icons/di';
import {MdProductionQuantityLimits} from 'react-icons/md';
import {BsBorderStyle} from 'react-icons/bs';

import {FaUsers} from 'react-icons/fa'
import {useContext} from 'react'
import {Context} from '../Context/applyContext/context'

export default function Sidenav (){
    const {ui,dispatch} = useContext(Context)

    const handleAnalytics = ()=>{
        dispatch({type:"ANALYTICS",payload:'analytics'})
        
    }
    const handleProduct = () => {
        dispatch({type:"PRODUCTS",payload:'product'})
        
    }
    const handleUsers = () => {
        dispatch({type:"VIEW",payload:'view'})
       
    }
    const handleOrders = () => {
        dispatch({type:"ORDERS",payload:'orders'})
       
    }

  return (
    <div className="sidenav">
        <div className="sidenav-wrapper">
            <div className="sidenav-header">
            {/* Analytics */}
                <div className="sidenav-header-logo"onClick={handleAnalytics}> <DiGoogleAnalytics />Analytics</div>
            </div>
        </div>
        <div className="sidenav-wrapper">
        {/* Products */}
        <div className="sidenav-header-logo"onClick={handleProduct}> <MdProductionQuantityLimits />Product</div>
        {/* Users */}
        <div className="sidenav-header-logo"onClick={handleUsers}><FaUsers />Users</div>
        {/* Orders */}
        <div className="sidenav-header-logo"onClick={handleOrders}> <BsBorderStyle />Orders</div>
        </div>
    </div>
  )
}


