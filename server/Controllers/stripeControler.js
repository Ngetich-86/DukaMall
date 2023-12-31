import Stripe from 'stripe';
import config from '../db/config.js';
// const stripe = Stripe(config.STRIPE_KEY)
const stripe = Stripe('sk_test_51NVE3DSGnjGeA9olOdnQjE6PPnwvEauEE3ryEFSVi0MWBq3sYtL7gFyty7Q0JTATioi6N5wnMRken18pbDV3CSTW00WQBWjm99')
const client = 'http://localhost:5173/'
// const client = config.client_url

export const stripeCheckout = async (req, res) => {
    const cartItems = req.body.state.map((cartItem) => {
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: cartItem.title,
                    images: [cartItem.image], 
                    description: cartItem.quantity,
                    metadata: {
                        id: cartItem.index
                    }
                },
                unit_amount: cartItem.price * 100
            },
            quantity: cartItem.quantity
        };
    });


    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_address_collection: {
            allowed_countries: ["US", "CA", "KE"],
        },
        phone_number_collection: {
            enabled: true,
        },
        line_items: cartItems, 
        mode: 'payment',
        success_url: `${client}CheckoutSuccess`,
        cancel_url: `${client}/Cart`,
    });


    res.send({ url: session.url });
};


  
//   const createOrder = async (customer, data) => {
//     try {
//       const item = JSON.parse(customer.metadata.cart);
//       console.log(item)
//       const pool = await sql.connect(config.sql); 
//       const order = await pool
//         .request()
//         .input('userID', sql.Int, customer.metadata.userID)
//         .input('paymentIntent', sql.VarChar(), data.payment_intent)
//         .input('productName', sql.VarChar(), item[0].name)
//         .input('productID', sql.Int, item[0].productID        )
//         .input('quantity', sql.Int, item[0].cartTotalquantity)
//         .input('shippingAddress', sql.VarChar(), data.customer_details.address.country)
//         .input('totalAmount', sql.Int, data.amount_total/100)
//         .query('INSERT INTO orders (userID, productName, quantity, shippingAddress,totalAmount, paymentIntent) VALUES (@userID, @productName, @quantity, @shippingAddress, @totalAmount, @paymentIntent)');
  
//     } catch (error) {
//       console.error('Error creating order:', error);
//     }
//   };
//   //webhooks
// // This is your Stripe CLI webhook secret for testing your endpoint locally.
// let endpointSecret;
// // endpointSecret = "whsec_113d78c5575576a5ad51e213337c7b108083c7039052f6f737ebe0689bc7cbc0";
 




// export const webhookHandler = (request, response) => {
//   const sig = request.headers['stripe-signature'];

//   let data;
//   let eventType;
//   if(endpointSecret){

//     let event;
  
//     try {
//       event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
//       console.log('verification success')
//     } catch (err) {
//       response.status(400).send(`Webhook Error: ${err.message}`);
//       console.log(err)
//       return;
//     }
//   }else{
//     data = request.body.data.object;
//     eventType = request.body.type;
//   }

//   // Handle the event
//    if(eventType === "checkout.session.completed"){
//     stripe.customers.retrieve(data.customer).then(
//       (customer)=>{
//         // const item = JSON.parse(customer.metadata.cart)
//         // console.log(...item)
//         // console.log(item[0].name)
//         createOrder(customer, data)
//         // console.log(data)
//         // console.log(customer) 
//       }
//     ).catch(err=> console.log(err.message))
//    }


//   // Return a 200 response to acknowledge receipt of the event
//   response.send().end();
// };





















