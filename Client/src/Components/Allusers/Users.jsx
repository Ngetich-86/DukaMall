import React from 'react'
import './users.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
const Users = () => {
  const [data,setData]=useState([]);

  useEffect(()=>{
  
    axios.get('http://localhost:8080/users',data)
    .then((res) => {
      if (res.data) {
        console.log(res.data)
        setData(res.data);
      } else {
        console.log('error');
      }
    })
    .catch((error) => {
      console.log('error', error);
    });
}, []);

const handleDelete = async (id) => {
  // console.log(UserID)
  try {
    const response = await axios.delete('http://localhost:8080/users/users/${id}', );
    // fetchCommentsDetails();
    alert("are you sure you want to delete this user?");
    console.log(response.data);
  } catch (response) {
    console.log(response)
    alert("Ops!☠️ Something went wrong. Please try again later");
  }
};
  
 
  return (
    <div className="cont1">
      <h2>SHIPPING INFORMATION</h2>
      <table>
  <thead>
    <tr>
      <th>Full Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Phone Number</th> 
      <th>postal code</th>
      <th>city</th>
      <th>Status(delivery)</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {data.map((user) => (
  <tr key={user.UserID}>
    
    <td>{user.fullName}</td>
    <td>{user.userName}</td>
    <td>{user.email}</td>
    <td>{user.phoneNumber}</td>
    <td>{user.postalCode}</td>
    <td>{user.city}</td>
    <td>PENDING</td>


    
    
    <td>
      <button onClick={()=>handleDelete(user.UserID)}>Delete</button>
    </td>
  </tr>
))}

     
   
  </tbody>
</table>

    </div>
  )
}

export default Users