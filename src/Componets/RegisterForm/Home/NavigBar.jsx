import React, { useContext, useState } from 'react'
import { Badge, Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { auth, db } from '../Firebase'
import { useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import './NavigBar.css'
import logo from '../Home/shopping.png'
import { FaCartPlus } from "react-icons/fa";
import { CartCondext } from '../../../App'
import { Link } from 'react-router-dom'

function NavigBar() {
  const {CartCount,setCartCount} =useContext(CartCondext)
  const [UserDetails, setUserDetails] = useState()
  const  handlelogout =async()=>{
    try {
      await auth.signOut()
      window.location.href ="/"
    } catch (error) {
      console.log(error.message);
    }
  }
  const fetchUserData =async()=>{
    auth.onAuthStateChanged(async(user)=>{
       
        const docref=doc(db,"Users",user.uid)
        const docsnap=await getDoc(docref)
        if(docsnap.exists()){
          setUserDetails(docsnap.data())
         
          
        }else{
          console.log("user is not logged i");
          
        }
      
        
    })

  }
  useEffect(()=>{
    fetchUserData()
  },[fetchUserData])
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <img className='logo' src={logo} alt="" />
        <Navbar.Brand href="/">E-Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Top Products</Nav.Link>
          </Nav>
          <Form className="d-flex m-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          
          {UserDetails ? (
            <NavDropdown className='user-info' title={UserDetails.Name} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handlelogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
             ):(
              <p>Loading.......</p>
            )}
            <div style={{display:"flex",flexDirection:"column"}}>
            
            <Badge className='cart-badge' bg="success">{CartCount}
            </Badge>
            <FaCartPlus className="cart-icon"/>
            <Link to={'/mycart'}>MyCart</Link>
            </div>
            </Navbar.Collapse>
       
      </Container>
      
    </Navbar>
    
    </div>
  )
}

export default NavigBar