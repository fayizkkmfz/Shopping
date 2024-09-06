
import { useEffect, useState } from 'react';
import './App.css';
import Home from './Componets/RegisterForm/Home/Home';
import Login from './Componets/RegisterForm/Login/Login';
import Register from './Componets/RegisterForm/Register';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { auth } from './Componets/RegisterForm/Firebase';

function App() {
  const [user, setuser] = useState()
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setuser(user)
    })
  })
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='login'element={user ? <Navigate to={"/home"} />:<Login />}/>
        <Route path='/'element={<Register />}/>
        <Route path='home'element={<Home />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
