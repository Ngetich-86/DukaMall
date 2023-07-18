import React from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import './Admin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../../Context/useContent/Context";



const Admin = () => {
  const navigate = useNavigate();
  const {dispatch} = useContext(Context);

  const schema = yup.object().shape({
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  
  const {register,handleSubmit,formState: { errors },reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    axios.post("http://localhost:8080/auth/admin", data)
    .then(({data}) => {
      if(data.token){
        // dispatch({type:"Login Success",payload:data});
      alert('Login Successful🎆🎊 ');
       navigate('/Ads');
      }
      })
    .catch(({response}) => {
       console.log(response.data.error); });
      //  alert('Login Failed');
    }

  return (
    <div className="loginPage">
      <h1 className="admin_title">Admin</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="myFormLogin">
        <>
          <input type="email" placeholder="Your email" {...register("email")} className="inputFieldLogin"/>
          <p>{errors.email?.message}</p>
        </>
        <>
          <input className="inputFieldLogin" type="password" placeholder="Your password"{...register("password")}
          />
          <p>{errors.password?.message}</p>
        </>
        <input type="submit" value="LOG IN" className="submitbtn" />
      </form>
    </div>
  
    
  
  )
}

export default Admin