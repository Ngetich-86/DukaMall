import React from "react";
import "./Sign.css";
import {useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";


const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  userName: yup.string().required("username is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  postalCode: yup.string().required("postalcode is required"),
  city: yup.string().required("city is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

function Register() {
  
  const {register,handleSubmit,formState: { errors },reset,} = useForm({ resolver: yupResolver(schema) });

 

  const onSubmit = (data) => {
    axios.post("http://localhost:8080/auth/register", data)
    .then((response) => {
      response.data.message && alert(response.data.message);
      console.log(response);
      navigate("/Log");
      })
    .catch((error) => {
       alert(error.response.data.message); 
       console.log(error);
      });   
    }

  return (
    <div className="registrationPage">
      <h2 className="registrationTitle">Sign UP Now😲</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="myFormLogin1">
        <>
        <input className="inputFieldLogin" type="text"placeholder="Your full name" {...register("fullName", { required: true })}/>
        {errors.fullName && <span>This field is required</span>}
        </>
        <>
          <input className="inputFieldLogin" type="text" placeholder="Your username"{...register("userName")}/>
          <p>{errors.userName?.message}</p>
        </>
        <>
          <input className="inputFieldLogin" type="email" placeholder="Your email" {...register("email")}/>
          <p>{errors.email?.message}</p>
        </>
        <>
          <input className="inputFieldLogin" type="text" placeholder="Your phone number"{...register("phoneNumber")} />
          {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
        </>

        <>
        <input className= "inputFieldLogin" type="text" placeholder="Your postalcode" {...register("postalCode")}/>
          {errors.postalCode && <span>{errors.postalCode.message}</span>}
        </>
        <>
        <input className= "inputFieldLogin" type="text" placeholder="Your city" {...register("city")}/>
          {errors.city && <span>{errors.city.message}</span>}
        </>
    
        
        <>
          <input className="inputFieldLogin"type="password" placeholder="Your password" {...register("password")} />
          <p>{errors.password?.message}</p>
        </>
        <>
          <input className="inputFieldLogin" type="password" placeholder="Confirm your password" {...register("confirmPassword")} />
          <p>{errors.confirmPassword?.message}</p>
        </>
        <input type="submit" value="REGISTER" className="submitbtn" />
      </form>
    </div>
  );
}

export default Register;
