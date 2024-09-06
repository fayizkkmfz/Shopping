import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { auth, db } from '../Firebase'
import { useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'

function NavigBar() {
  const [UserDetails, setUserDetails] = useState()
  const  handlelogout =async()=>{
    try {
      await auth.signOut()
      window.location.href ="/login"
    } catch (error) {
      console.log(error.message);
    }
  }
  const fetchUserData =async()=>{
    auth.onAuthStateChanged(async(user)=>{
        console.log(user);
        const docref=doc(db,"Users",user.uid)
        const docsnap=await getDoc(docref)
        if(docsnap.exists()){
          setUserDetails(docsnap.data())
          console.log(UserDetails);
          
        }else{
          console.log("user is not logged i");
          
        }
      
        
    })

  }
  useEffect(()=>{
    fetchUserData()
  },[])
  return (
    <div>
      {UserDetails ? (

      
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title={UserDetails.Name} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handlelogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    ):(
      <p>Loading.......</p>
    )}
    </div>
  )
}

export default NavigBar