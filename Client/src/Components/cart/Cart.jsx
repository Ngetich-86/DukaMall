import { Link } from "react-router-dom";
import { useContext } from "react";
import { Cartcontext } from "../../Context/Context";
import "./Cart.css";
import { IoMdTrash } from "react-icons/io";
import EmpCart from "../emptyCart/EmpCart";

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
        state.map((item, index) => {
          return (
            <div className="card" key={index}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <p>{item.quantity * item.price}</p>
              <div className="quantity">
                <button
                  onClick={() => dispatch({ type: "INCREASE", payload: item })}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch({ type: "DECREASE", payload: item });
                    } else {
                      dispatch({ type: "REMOVE", payload: item });
                    }
                  }}
                >
                  -
                </button>
              </div>
              <IoMdTrash
                onClick={() => dispatch({ type: "REMOVE", payload: item })}
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
         <h2>${total}</h2>
          <button>Checkout🤑 : ${total}</button>
      </div>
       
        
      )}
    </div>
  );
};

export default Cart;





// import { useContext } from "react";
// import { Cartcontext } from "../../Context/Context";
// import "./Cart.css";
// import { IoMdTrash } from "react-icons/io";


// const Cart = () => {
//   const Globalstate = useContext(Cartcontext);
//   const state = Globalstate.state;
//   const dispatch = Globalstate.dispatch;

//   const total = state.reduce((total, item) => {
//     return total + item.price * item.quantity;
//   }, 0);
//   return (
//     <div className="cart">
//         {state.length > 0 ? (
//       {state.map((item, index) => {
//         return (
//           <div className="card" key={index}>
//             <img src={item.image} alt="" />
//             <p>{item.title}</p>
//             <p>{item.quantity * item.price}</p>
//             <div className="quantity">
//               <button
//                 onClick={() => dispatch({ type: "INCREASE", payload: item })}>
//                 +
//               </button>
//               <p>{item.quantity}</p>
//               <button
//                 onClick={() => {
//                   if (item.quantity > 1) {
//                     dispatch({ type: "DECREASE", payload: item });
//                   } else {
//                     dispatch({ type: "REMOVE", payload: item });
//                   }
//                 }}>
//                 -
//               </button>
//             </div>
//             <IoMdTrash onClick={() => dispatch({ type: "REMOVE", payload: item })} />

//           </div>
//         );
//       })}
//       {state.length > 0 && (
//         <div className="total">
//           <h2>${total}</h2>
//           <button>CHECKOUT</button>
//         </div>
//       )}
//         ) : (
//           <h1>Your cart is empty</h1>
        
//         )
//     </div>
//   );
// };

// export default Cart;