import React from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import './Login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email("Email is invalid").required("Email is required"),
    password: yup
      .string()
      .min(4, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  
  const {register,handleSubmit,formState: { errors },reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    axios.post("http://localhost:8080/auth/login", data)
    .then(({data}) => {
      if(data.token){
        // dispatch({type:"Login Success",payload:data});
      alert('Login Successful🎆🎊 ');
      console.log(data);
       navigate('/Cart');
      }
      })
    .catch(({response}) => {
       console.log(response.data.error); });
       alert(response.data.error); 
    }

  return (
    <div className="loginPage2">
      <h3 className="loginTitle2">LOG-IN</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="myFormLogin2">
        <>
          <input type="email" placeholder="Your email" {...register("email")} className="inputFieldLogin2"/>
          <p>{errors.email?.message}</p>
        </>
        <>
          <input className="inputFieldLogin2" type="password" placeholder="Your password"{...register("password")}
          />
          <p>{errors.password?.message}</p>
        </>
        <input type="submit" value="LOG IN" className="submitbtn" />
        </form>
      
    </div>
  
    
  
  )
}

export default Login