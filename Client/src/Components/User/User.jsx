import React from 'react'
import './User.css'
import image from '../../assets/images/msbag.jpg'
const User = () => {
  return (

    <div className="user-page">
        <div className="user-img">
        <img src={image}alt="user-img"/>
        </div>

        <div className="user-info">
        <h2>My Profile</h2>
        <h4>Email:</h4>
        <h4>Username:</h4>
        <h4>Phone Number:</h4>
        <h4>Postal Code:</h4>
        <h4>City:</h4>
        <h4>Address:</h4>
        <button>Update Info</button>
        </div>
        </div>
  )
}

export default User