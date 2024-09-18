import React, { useContext, useState } from 'react'
import { Badge, Button, Form, Navbar, NavDropdown } from 'react-bootstrap'
import { auth, db } from '../Firebase'
import { useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import './NavigBar.css'
import logo from '../Home/shopping.png'
import { FaCartPlus } from "react-icons/fa";
import { CartCondext } from '../../../App'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";

function NavigBar() {
  const { CartCount, setSearchText } = useContext(CartCondext)
  const [UserDetails, setUserDetails] = useState()

  const handlelogout = async () => {
    try {
      await auth.signOut()
      window.location.href = "/"
    } catch (error) {
      console.log(error.message);
    }
  }

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docref = doc(db, "Users", user.uid)
      const docsnap = await getDoc(docref)
      if (docsnap.exists()) {
        setUserDetails(docsnap.data())
      } else {
        console.log("user is not logged i");
      }
    })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
      <Navbar>
        <img className='logo' src={logo} alt="" />
        <Link className='brand-head' to={'/'}>E-Shop</Link>

        <Form className="search">
          <Form.Control
            type="search"
            placeholder="Search for Products"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant="outline-success">Search</Button>
        </Form>

        <Link className='mycart-link' to={'/mycart'}>MyCart</Link>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Badge className='cart-badge' bg="success">{CartCount}
          </Badge>
          <FaCartPlus className="cart-icon" />
        </div>

        {UserDetails ? (
          <>
            <CgProfile className='user-icon' />
            <NavDropdown className='user-info' title={UserDetails.Name} id="navbarScrollingDropdown" >
              <NavDropdown.Item >
              <Link className='mycart-drop' to={'/'}>Home</Link>
              </NavDropdown.Item>
              <NavDropdown.Item ><Link className='mycart-drop' to={'/mycart'}>MyCart</Link></NavDropdown.Item>
              <NavDropdown.Item className='mycart-drop' onClick={handlelogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </>
        ) : (
          <p>Loading.......</p>
        )}
      </Navbar>
    </div>
  )
}

export default NavigBar