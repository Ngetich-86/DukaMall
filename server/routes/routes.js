import {
    registerUser,
    loginUser,
    // loginRequired,
  } from "../Controllers/regLogController.js";
  import {adminLogin} from "../Controllers/adminController.js";
  import {registerAdmin} from "../Controllers/adminController.js"
  import { getData } from "../Controllers/userData.js";
  // import {stripeCheckout, webhookHandler} from "../Controllers/stripeControler.js"
  import {addProduct} from "../Controllers/productController.js"
  import {getProducts} from "../Controllers/productController.js"
  import {deleteProduct} from "../Controllers/productController.js"
  import express from 'express';
  

  
  const routes = (app) => {
    //register route
    app.route("/auth/register").post(registerUser);
    //login route
    app.route("/auth/login").post(loginUser);

    app.route("/auth/admin").post(adminLogin);

    app.route('/admin/reg').post(registerAdmin);

    //get all data
    app.route("/users").get(getData);

    //stripe route
    // app.route('/create-checkout-session').post(stripeCheckout)
    // app.route('/webhook').post( express.raw({ type: 'application/json' }), webhookHandler)

    //add product
    app.route('/addProduct').post(addProduct)

    //get all products
    app.route('/getProducts').get(getProducts)

    //delete product
    app.route('/deleteProduct').delete(deleteProduct)
   
  
  
  
  };
  export default routes;
  