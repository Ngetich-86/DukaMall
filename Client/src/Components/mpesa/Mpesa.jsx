import React from 'react'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./mpesa.css";
const schema = yup.object().shape({
    phone: yup.string().required("phoneis required"),
    amount: yup.string().required("amount is required"),
    
  });

const Mpesa = () => {


    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm({ resolver: yupResolver(schema) });


  return (
    <div className="payment">
        <div className="mpesa-title">
        <h3> pay with MPESA</h3>
        </div>
        <div className="mpesa-body">
        <form >
        <label>Phone</label>
        <input name="title" type="text" placeholder="phone"{...register("phone")} />
        <p className="error-message">{errors.phone?.message}</p> 

        <label>Amount</label>
        <input name="title" type="text" placeholder="amount"{...register("amount")} />
        <p className="error-message">{errors.amount?.message}</p> 
        <button type="submit"  className="btn-mpesa1">Pay now</button>
        </form>
        </div>
    </div>
  )
}

export default Mpesa