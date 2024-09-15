
import { createContext, useEffect, useState } from 'react';
import './App.css';
import Home from './Componets/RegisterForm/Home/Home';
import Login from './Componets/RegisterForm/Login/Login';
import Register from './Componets/RegisterForm/Register';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { auth } from './Componets/RegisterForm/Firebase';
import MyCart from './Componets/RegisterForm/MyCart/MyCart';
import Order from './Componets/RegisterForm/Order/Order';
import NavigBar from './Componets/RegisterForm/Home/NavigBar';

export const CartCondext =createContext()

function App() {
  const [CartCount, setCartCount] = useState(0)
  const [CartItems, setCartItems] = useState([])
  const [user, setuser] = useState()
  const [OrderProduct, setOrderProduct] = useState({})
  const [NavigBarShow, setNavigBarShow] = useState(false)
  const [SearchText, setSearchText] = useState("")
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setuser(user)
    })
  })
  return (
    <div>
      <CartCondext.Provider value={{setNavigBarShow,CartCount,setCartCount,CartItems, setCartItems,OrderProduct, setOrderProduct,SearchText, setSearchText}}>

      <BrowserRouter>
      {NavigBarShow === true ? <NavigBar /> : "" }
      <Routes>
        
        <Route path='/'element={user ? <Navigate to={"/home"} /> : <Login />}/>
        <Route path='/register'element={<Register />}/>
        <Route path='/mycart'element={<MyCart />}/>
        <Route path='home'element={<Home />}/>
        <Route path='order'element={<Order />}/>
      </Routes>
      </BrowserRouter>
      </CartCondext.Provider>
    </div>
  );
}

export default App;
