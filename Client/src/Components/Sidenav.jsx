import React from 'react'
import './Sidenav.css'

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

  return (
    <div className="sidenav">
        <div className="sidenav-wrapper">
            <div className="sidenav-header">
                <div className="sidenav-header-logo"onClick={handleAnalytics}>Analytics</div>
            </div>
        </div>
        <div className="sidenav-wrapper">
        <div className="sidenav-header-logo"onClick={handleProduct}>Products</div>
        <div className="sidenav-header-logo"onClick={handleUsers}>Users</div>
        </div>
    </div>
  )
}


