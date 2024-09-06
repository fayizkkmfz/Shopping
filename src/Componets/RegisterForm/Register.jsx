import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Register.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth,db } from './Firebase'
import { doc, setDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'

function Register() {
  const [Name, setName] = useState("")
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const getInputValues =async(e)=>{
      e.preventDefault()                                                                                                                                                                                                                                                                
      
      try {
        await createUserWithEmailAndPassword(auth,email,password)
        const user=auth.currentUser;
        console.log(user);
        if(user){
          await setDoc(doc(db,"Users",user.uid),{
            email:user.email,
            Name:Name,
            username:username,

          })
        }
        console.log("registratio successfully");
        
        
      } catch (error) {
        console.log(error.message);
        
      }
      
  }
  return (
    <div className='RegisterForm'>
        <Form onSubmit={getInputValues}>
        <Form.Group className="mb-3">
        <Form.Label>First Name </Form.Label>
        <Form.Control type="text" placeholder="First Name" 
        onChange={(e)=>setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Userame"
        onChange={(e)=>setUserName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        onChange={(e)=>setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <p className='text-end'><Link to={'/login'}>login</Link></p>
    </div>
  )
}

export default Register