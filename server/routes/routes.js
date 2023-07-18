import {
    registerUser,
    loginUser,
  
    // loginRequired,
  } from "../Controllers/regLogController.js";
  import {adminLogin} from "../Controllers/adminController.js";
  import {registerAdmin} from "../Controllers/adminController.js"
  import { getData } from "../Controllers/userData.js";
  
  const user = (app) => {
    //register route
    app.route("/auth/register").post(registerUser);
    //login route
    app.route("/auth/login").post(loginUser);

    app.route("/auth/admin").post(adminLogin);

    app.route('/admin/reg').post(registerAdmin);

    //get all data
    app.route("/users").get(getData);
   
  
  
  
  };
  export default user;
  