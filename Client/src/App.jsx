import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Components/Navbar/Nav'
import Cart from './Components/cart/Cart'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Sign'
import Footer from './Components/Footer/Footer'
import User from './Components/User/User'
import Admin from './Components/Admin/Admin'
import Services from './Components/Services/Ads'
import Mpesa from './Components/mpesa/Mpesa'
import './App.css'
import Logout from './Components/Logout/Logout'
import { Context } from './Context/useContent/Context'
import { useContext } from 'react'
import CheckoutSuccess from './Components/CheckoutSuccess'

const App = () => {
  const {user} = useContext(Context);
  return (
    <BrowserRouter>
  <Nav />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Cart" element={<Cart/>} />
      <Route path="/CheckoutSuccess" element={<CheckoutSuccess/>} />
      <Route path="/User" element={<User/>} />
      <Route path="/Admin" element={<Admin/>} />
      <Route path="/Ads" element={<Services/>} />
      <Route path="/Logout" element={<Logout/>} />
      <Route path="/Mpesa" element={<Mpesa/>} />

      
    </Routes>
    <Footer/>
  </BrowserRouter>
   
  )
}

export default App