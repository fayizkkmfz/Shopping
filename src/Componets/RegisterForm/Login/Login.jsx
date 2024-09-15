import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Login.css'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase'

function Login() {
  const [password,setpassword] = useState("")
  const [email, setemail] = useState("")
  
  const getIputValues=async(e)=>{
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth,email,password)
      console.log("user logged successfully");
      window.location.href = "/home"
      
      
    } catch (error) {
      console.log(error.message);
      
      
    }
    
  }
 
  return (
    <div className='login-form'><Form onSubmit={getIputValues}>
    <Form.Group className="mb-3">
    <Form.Label> Email </Form.Label>
    <Form.Control type="email" placeholder="Email" 
    onChange={(e)=>setemail(e.target.value)}
    />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    onChange={(e)=>setpassword(e.target.value)}
    />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
<p className='text-end'><Link to={'/register'}>Create Account</Link></p>
</div>
  )
}

export default Login