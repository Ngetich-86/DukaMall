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
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
  <Nav />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Cart" element={<Cart/>} />
      <Route path="/User" element={<User/>} />
      <Route path="/Admin" element={<Admin/>} />
      <Route path="/Ads" element={<Services/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
   
  )
}

export default App