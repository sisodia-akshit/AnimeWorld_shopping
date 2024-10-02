import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './Screens/About/About'
import Login from './Screens/Register/Login/Login'
import SignUp from './Screens/Register/Signup/SignUp'
import Shop from './Screens/Home/Shop'
import Profile from './Screens/Profile/Profile'
import Cart from './Screens/Cart/Cart'
import Products from './Screens/Home/Products'
import ProdDetail from './Screens/SingleProdDetail/ProdDetail'
import PlaceOrder from './Screens/PlaceOrder/PlaceOrder'
import Payment from './Screens/Payment/Payment'

function App() {

  return (
   <Routes>
    <Route path='/checkout/payment' element={<Payment/>}/>
    <Route path='/' element={<About/>} />
    <Route path='/home' element={<Shop/>}/>
    <Route path='/:type' element={<Products/>}/>
    <Route path='/:type/:id' element={<ProdDetail/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/checkout/cart' element={<Cart/>}/>
    <Route path='/checkout/cart/Address' element={<PlaceOrder/>}/>
    {/* <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/> */}
    <Route path='/*' element={<About />} />

   </Routes>
  )
}

export default App
