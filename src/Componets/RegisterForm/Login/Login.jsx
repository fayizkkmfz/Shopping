import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Login.css'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase'

function Login() {
  const [password, setpassword] = useState("")
  const [email, setemail] = useState("")
  const [Error, setError] = useState("")

  const getIputValues = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log("user logged successfully");
      window.location.href = "/home"


    } catch (error) {
      setError("invalid user");


    }

  }

  return (


<div className='register-background'>
    <div className='login-form'><Form onSubmit={getIputValues}>
      <h1 className='login-accont-text'>Login Acoount</h1>
      <Form.Group className="login-input">

        <Form.Control type="email"  placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
        />
        <span>test : fayizkkmfz@gmail.com</span>
      </Form.Group>
      <Form.Group className="login-input" >

        <Form.Control type="password" placeholder="123456"
          onChange={(e) => setpassword(e.target.value)}
        />
      </Form.Group>
      <h6 className='error-msg'>{Error}</h6>
      <Button className='login-button' variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <Link className='create-link' to={'/register'}><p >Create Account</p></Link>
    </div>
    </div>


  )
}

export default Login