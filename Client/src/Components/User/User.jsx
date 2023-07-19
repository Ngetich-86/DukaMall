import React from 'react'
import './User.css'
import image from '../../assets/images/avatar.png'
const User = () => {
  return (

    <div className="user-page">
        <div className="user-img">
        <img src={image}alt="user-img"/>
        </div>

        <div className="user-info">
        <h2>My Profile</h2>
        <h4>Email:del@gmail.com</h4>
        <h4>Username:Del</h4>
        <h4>Phone Number: 0742252810</h4>
        <h4>Postal Code:20300</h4>
        <h4>City: Konza</h4>
        <h4>Address:123-233-230 Nco</h4>
        <button>Update Info</button>
        </div>
        </div>
  )
}

export default User