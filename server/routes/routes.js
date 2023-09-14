import {
    registerUser,
    loginUser,
    // loginRequired,
  } from "../Controllers/regLogController.js";
  import {adminLogin} from "../Controllers/adminController.js";
  import {registerAdmin} from "../Controllers/adminController.js"
  import { getData } from "../Controllers/userData.js";
  import {stripeCheckout} from "../Controllers/stripeControler.js"
  import {addProduct} from "../Controllers/productController.js"
  import {getProducts} from "../Controllers/productController.js"
  import {deleteProduct} from "../Controllers/productController.js"
  import {mpesaToken} from "../Controllers/mpesaController.js"
  import { stkPush } from "../Controllers/mpesaController.js";
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
    app.route('/stripe-session').post(stripeCheckout)
    // app.route('/webhook').post( express.raw({ type: 'application/json' }), webhookHandler)

    //add product
    app.route('/addProduct').post(addProduct)

    //get all products
    app.route('/getProducts').get(getProducts)

    //delete product
    app.route('/deleteProduct').delete(deleteProduct)

    //mpesa api route
    app.route('/mpesa').post(mpesaToken)
    //stk push
    app.route('/stkpush').post(stkPush)
   
  
  
  
  };
  export default routes;
  