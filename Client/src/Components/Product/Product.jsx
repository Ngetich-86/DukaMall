import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react"; // Import useState if not already imported.
import './product.css';
import avatar from '../../assets/images/msbag.jpg';

const schema = yup.object().shape({
  title: yup.string().required("Title name is required"),
  price: yup.string().required("Price is required"),
  description: yup.string().required("Description is required"),
  category: yup.string().required("Category is required")
});

function Product() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    if (!isSubmitting) {
      setIsSubmitting(true);
      // Replace the URL below with the appropriate endpoint for adding a product.
      axios.post("http://localhost:8080/api/add-product", data)
        .then((response) => {
          alert(response.data.message);
          console.log(response);
          setIsSubmitting(false);
          reset();
        })
        .catch((error) => {
          alert(error.response?.data?.message || "An error occurred while adding the product.");
          console.log(error);
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div className="product-page">
      <div className="prod-img">
        <img src={avatar} alt="title" />
        <input type="file" placeholder="Product Image" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="prod-details">
          <>
            <input className="inputFieldLogin" type="text" placeholder="Your title" {...register("title")} />
            {errors.title && <span>{errors.title.message}</span>}
          </>
          <>
            <input className="inputFieldLogin" type="text" placeholder="Your price" {...register("price")} />
            {errors.price && <span>{errors.price.message}</span>}
          </>
          <>
            <input className="inputFieldLogin" type="text" placeholder="Your description" {...register("description")} />
            {errors.description && <span>{errors.description.message}</span>}
          </>
          <>
            <input className="inputFieldLogin" type="text" placeholder="Your category" {...register("category")} />
            {errors.category && <span>{errors.category.message}</span>}
          </>
          <br></br>
          
          <button className="btnLogin" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add Product"}
          </button>
        </div>
      </form>
      
    </div>
  );
}

export default Product;







// import React from 'react'
// import './product.css'
// import avatar from '../../assets/images/msbag.jpg'
// const Product = () => {
//   return (
//     <div className="product-page">
//         <div className="prod-img">
//             <img src={avatar} alt="title" />
//         </div>
//         <div className="prod-details">
//             <h4>Product title</h4>
//             <input type="text" placeholder="Product title" />
//             <h4>Product Price</h4>
//             <input type="text" placeholder="Product Price" />
//             <h4> Description</h4>
//             <input type="text" placeholder="Product Description" />
//             <h4>Product Category</h4>
//             <input type="text" placeholder="Product Category" />
//             <h4>Product Image</h4>
//             <input type="file" placeholder="Product Image" />
//             <button>Add Product</button>
//             {/* <button>Delete Product</button> */}
//             </div>
//     </div>
//   )
// }

// export default Product