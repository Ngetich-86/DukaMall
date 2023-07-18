import React from 'react'
import './product.css'
import avatar from '../../assets/images/msbag.jpg'
const Product = () => {
  return (
    <div className="product-page">
        <div className="prod-img">
            <img src={avatar} alt="title" />
        </div>
        <div className="prod-details">
            <h2>Product Name</h2>
            <input type="text" placeholder="Product Name" />
            <h2>Product Price</h2>
            <input type="text" placeholder="Product Price" />
            <h2> Description</h2>
            <input type="text-area" placeholder="Product Description" />
            <h2>Product Image</h2>
            <input type="file" placeholder="Product Image" />
            <button>Add Product</button>
            {/* <button>Delete Product</button> */}
            </div>
    </div>
  )
}

export default Product