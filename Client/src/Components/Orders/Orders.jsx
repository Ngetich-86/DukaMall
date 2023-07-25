import React from 'react'
// import './users.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
const Users = () => {
  const [data,setData]=useState([]);

  useEffect(()=>{
  
    axios.get('http://localhost:8080/getProducts',data)
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
      <h2>Orders</h2>
      <table>
  <thead>
    <tr>
      <th>title</th>
      <th>description</th>
      <th>price</th>
      <th>category</th> 
      <th>image</th>
      {/* <th>Action</th> */}
    </tr>
  </thead>
  <tbody>
  {data.map((user) => (
  <tr key={user.UserID}>
    
    <td>{user.title}</td>
    <td>{user.description}</td>
    <td>{user.price}</td>
    <td>{user.category}</td>
    <td>{user.image}</td>
    


    
    
    {/* <td> */}
      {/* <button onClick={()=>handleDelete(user.UserID)}>Delete</button> */}
    {/* </td> */}
  </tr>
))}

     
   
  </tbody>
</table>

    </div>
  )
}

export default Users