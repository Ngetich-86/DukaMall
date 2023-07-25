// import { useState } from "react";
// import "./product.css";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import app from "../../Components/firebase";
// import { addProduct } from "../AddProduct";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios";

// const schema = yup.object().shape({
//   title: yup.string().email("Email is invalid").required("is required"),
//   description: yup.string().required(" is required"),
//   price: yup.string().required(" is required"),
//   category: yup.string().required("category is required"),
// });

// export default function NewProduct() {
//   // const { register, handleSubmit, } = useForm({ resolver: yupResolver(schema) });
//   const [inputs, setInputs] = useState({});
//   const [file, setFile] = useState(null);
//   const [cat, setCat] = useState([]);
 

//   const onSubmit = () => {
//     e.preventDefault();


//     axios.post("http://localhost:8080/addProduct", inputs) // Pass 'inputs' instead of 'data'
//       .then((response) => {
//         response.data.message && alert(response.data.message);
//         console.log(response);
//         console.log(inputs);
//       })
//       .catch((error) => {
//         alert(error.response.data.message);
//         console.log(error);
//       });
//   };
  


//   const handleChange = (e) => {
//     setInputs((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   };
//   const handleCat = (e) => {
//     setCat(e.target.value.split(","));
//     console.log(inputs)
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     const fileName = new Date().getTime() + file.name;
//     const storage = getStorage(app);
//     const storageRef = ref(storage, fileName);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     // Register three observers:
//     // 1. 'state_changed' observer, called any time the state changes
//     // 2. Error observer, called on failure
//     // 3. Completion observer, called on successful completion
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         // Observe state change events such as progress, pause, and resume
//         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         console.log("Upload is " + progress + "% done");
//         alert("Upload is " + progress + "% done")
//         switch (snapshot.state) {
//           case "paused":
//             console.log("Upload is paused");
//             break;
//           case "running":
//             console.log("Upload is running");
//             break;
//           default:
//         }
//       },
//       (error) => {
//         // Handle unsuccessful uploads
//       },
//       () => {
//         // Handle successful uploads on complete
//         // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           const product = { ...inputs, img: downloadURL, categories: cat };
//           addProduct(product);
//         });
//       }
//     );
//   };

//   return (
//     <div className="newProduct">
//       <h4 className="addProductTitle">New Product</h4>
//       <form onSubmit={onSubmit}  className="addProductForm">
//         <div className="addProductItem">
//           <label>Image</label>
//           <input
//             type="file" id="file" onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>
//         <div className="addProductItem">
//       <label>Title</label>
//           <input name="title" type="text" placeholder="title" onChange={handleChange} 
//           // {...register("title")}
//           />
          
//         </div>
//         <div className="addProductItem">
//           <label>Description</label>
//           <input name="desc" type="text"placeholder="description" onChange={handleChange}
//           //  {...register("description")} 
//            />
//         </div>
//         <div className="addProductItem">
//           <label>Price</label>
//           <input name="price" type="number" placeholder="price" onChange={handleChange}
//           //  {...register("price")}
//            />
//         </div>
//         <div className="addProductItem">
//           <label>Categories</label>
//           <input type="text" placeholder="category" onChange={handleCat}
//           //  {...register("category")}
//            />
//         </div>
  
//         <button onClick={handleClick} className="addProductButton" type="submit">
//           Create
//         </button>
//       </form>
//     </div>
//   );
// }
import app from "../../Components/firebase";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import "./product.css";
import { addProduct } from "../AddProduct";
import { useState } from "react";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  } from "firebase/storage";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  price: yup.string().required("Price is required"),
  category: yup.string().required("Category is required"),
});

export default function NewProduct() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/addProduct", data) // Use 'data' from 'handleSubmit'
      .then((response) => {
        response.data.message && alert(response.data.message);
        console.log(response);
        console.log(data);
      })
      .catch((error) => {
        alert(error.response.data.message);
        console.log(error);
      });
  };

  
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
    console.log(inputs)
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        alert("Upload is " + progress + "% done")
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };
          addProduct(product);
        });
      }
    );
  };


return (
  <div className="newProduct">
    <h4 className="addProductTitle">New Product</h4>
    <form onSubmit={handleSubmit(onSubmit)} className="addProductForm">
    <label>Image</label>
              <input
            type="file" id="file" onChange={(e) => setFile(e.target.files[0])}
          />
    
      <div className="addProductItem">
        <label>Title</label>
        <input name="title" type="text" placeholder="title"{...register("title")} />
        <p className="error-message">{errors.title?.message}</p> 

        <label>Description</label>
        <input name="title" type="text" placeholder="desc.."{...register("description")} />
        <p className="error-message">{errors.title?.message}</p> 

        <label>Price</label>
        <input name="title" type="text" placeholder="ksh"{...register("price")} />
        <p className="error-message">{errors.title?.message}</p> 
        <label>category</label>
        <input name="title" type="text" placeholder="cat"{...register("category")} />
        <p className="error-message">{errors.title?.message}</p> 
      </div>

      <button type="submit" onClick={handleClick} className="addProductButton">
        Create
      </button>
    </form>
  </div>
);
}












































