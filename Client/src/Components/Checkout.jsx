import axios from 'axios'


function CheckOut({cartItems}) {
    const user = 1;
    const handleCheckout = ()=>{
        console.log(cartItems)
        axios.post('http://localhost:8080/create-checkout-session', {
            userID: user,
            cartItems
        }).then((res)=>{
            if(res.data.url){
                window.location.href = res.data.url
            }
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <>
    <button onClick={()=>handleCheckout()}>
        Checkout
    </button>
    </>
  )
}

export default CheckOut