import axios from 'axios';

function CheckOut({ cartItems }) {
  const user = 1;

  const handleCheckout = () => {
    console.log(cartItems);
    axios
      .post('http://localhost:8080/stripe-session', {
        userID: user,
        state: cartItems,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button onClick={handleCheckout}> {/* No need for an arrow function here */}
        Checkout
      </button>
    </>
  );
}

export default CheckOut;






// import axios from 'axios'


// function CheckOut({cartItem}) {
//     const user = 1;
//     const handleCheckout = ()=>{
//         console.log(cartItem)
//         axios.post('http://localhost:8080/stripe-session', {
//             userID: user,
//             cartItem: cartItem.state,
//             // state: cartItem,
//         }).then((res)=>{
//             if(res.data.url){
//                 window.location.href = res.data.url
//             }
//         }).catch((error)=>{
//             console.log(error)
//         })
//     }
//   return (
//     <>
//     <button onClick={()=>handleCheckout()}>
//         Checkout
//     </button>
//     </>
//   )
// }

// export default CheckOut