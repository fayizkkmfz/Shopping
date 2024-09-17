import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Register.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from './Firebase'
import { doc, setDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { SiGmail } from "react-icons/si";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";

function Register() {
  const [Name, setName] = useState("")
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const getInputValues = async (e) => {
    e.preventDefault()

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          Name: Name,
          username: username,

        })
      }
      console.log("registratio successfully");
      window.location.href = "/"

    } catch (error) {
      console.log(error.message);

    }

  }
  return (
    <div className='register-backgroud'>
      <div className='register-wallpaper'>
            <h5>E-SHOP</h5>
            <h1 className='welcome-text'>Welcome Back!</h1>
            <p>To keep connected with us <br />please login with your personal info</p>
            <Link  className='login-link' to={'/'}> <Button variant="success">Login</Button> </Link>
      </div>

      <div className='RegisterForm'>
        <h1 className='create-accont-text'>Create Account</h1>
        <div>
             <SiGmail className='login-icons' />
             <IoLogoFacebook className='login-icons' />
             <IoLogoLinkedin className='login-icons'/>
            
        </div>
        <Form className='register-form' onSubmit={getInputValues}>
          <Form.Group className="input">
      
            <Form.Control type="text" placeholder="First Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="input" >
          
            <Form.Control type="text" placeholder="Userame"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="input" >
           
            <Form.Control type="email" placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>

          <Form.Group className="input">
            
            <Form.Control type="password" placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
       
      </div>
    </div>
  )
}

export default Register