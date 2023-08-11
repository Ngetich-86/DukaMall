import { Link } from "react-router-dom";
import { useContext } from "react";
import { Cartcontext } from "../../Context/Context";
import "./Cart.css";
// import {useSelector, useDispatch} from 'react-redux'
import { IoMdTrash } from "react-icons/io";
import EmpCart from "../emptyCart/EmpCart";
import CheckOut from "../Checkout";
import Mpesa from "../mpesa/Mpesa";


// ... (imports and other code)

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart">
      {state.length > 0 ? (
        state.map((cartItem, index) => {
          return (
            <div className="card" key={index}>
              <img src={cartItem.image} alt="" />
              <p>{cartItem.title}</p>
              <p>{cartItem.quantity * cartItem.price}</p>
              <div className="quantity">
                <button
                  onClick={() => dispatch({ type: "INCREASE", payload: cartItem })}
                >
                  +
                </button>
                <p>{cartItem.quantity}</p>
                <button
                  onClick={() => {
                    if (cartItem.quantity > 1) {
                      dispatch({ type: "DECREASE", payload: cartItem });
                    } else {
                      dispatch({ type: "REMOVE", payload: cartItem });
                    }
                  }}
                >
                  -
                </button>
              </div>
              <IoMdTrash
                onClick={() => dispatch({ type: "REMOVE", payload: cartItem })}
              />
            </div>
          );
        })
      ) : (
        <EmpCart />
      )}

      {state.length > 0 && (
        <div className="total">
          <Link to= '/'>
        <a href="/"><button type="submit" className='btn-shop'>⬅️Continue Shopping</button></a>
                 </Link> 
         <h3>Total: {total}</h3>
        <CheckOut cartItems={state}/>
                 <h2>OR</h2>

       <Link to= '/Mpesa'>
       <a href="/Mpesa"><button type="submit" className='btn-mpesa'>pay with mpesa</button></a>
         </Link> 
        </div>
      )}
    </div>
  );
};

export default Cart;

// const Cart = () => {
//   // const cart = useSelector((state)=>state.cart);
//   const Globalstate = useContext(Cartcontext);
//   const state = Globalstate.state;
//   const dispatch = Globalstate.dispatch;

//   const total = state.reduce((total, item) => {
//     return total + item.price * item.quantity;
//   }, 0);

//   return (
//     <div className="cart">
//       {state.cartItems.length > 0 ? (
//         state.cartItems.map((cartItem, index) => {
//           return (
//             <div className="card" key={index}>
//               <img src={cartItem.image} alt="" />
//               <p>{cartItem.title}</p>
//               <p>{cartItem.quantity * cartItem.price}</p>
//               <div className="quantity">
//                 <button
//                   onClick={() => dispatch({ type: "INCREASE", payload: item })}
//                 >
//                   +
//                 </button>
//                 <p>{cartItem.quantity}</p>
//                 <button
//                   onClick={() => {
//                     if (cartItem.quantity > 1) {
//                       dispatch({ type: "DECREASE", payload: item });
//                     } else {
//                       dispatch({ type: "REMOVE", payload: item });
//                     }
//                   }}
//                 >
//                   -
//                 </button>
//               </div>
//               <IoMdTrash
//                 onClick={() => dispatch({ type: "REMOVE", payload: item })}
//               />
//             </div>
//           );
//         })
//       ) : (
//         <EmpCart />
//       )}

//       {state.cartItems.length > 0 && (
//         <div className="total">
//       <Link to= '/'>
//        <a href="/"><button type="submit" className='btn-shop'>⬅️Continue Shopping</button></a>
//          </Link> 
//          <h2>{total}</h2>
//          {/* <CheckOut cartItems={state}/> */}
//          <h2>OR</h2>

//          <Link to= '/Mpesa'>
//        <a href="/Mpesa"><button type="submit" className='btn-mpesa'>pay with mpesa</button></a>
//          </Link> 
        
     
         
          
//       </div>
       
        
//       )}
//     </div>
//   );
// };

// export default Cart;


