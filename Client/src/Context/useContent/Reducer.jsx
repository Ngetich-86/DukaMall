const Reducer = (state, action) => {
  switch (action.type) {
      case "Login Success":
          return {
              user: action.payload,
          };
      case "Login Failure":
          return {
              user: null
          };
      case "Logout":
          return {
              user: null
          };
      
  }
};

export default Reducer;