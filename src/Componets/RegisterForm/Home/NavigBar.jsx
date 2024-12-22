import React, { useContext } from 'react'
import { Badge, NavDropdown } from 'react-bootstrap'
import { auth } from '../Firebase'
import { useEffect } from 'react'
// import { doc, getDoc } from 'firebase/firestore'
import './NavigBar.css'
import logo from '../Home/shopping.png'
import { FaCartPlus } from "react-icons/fa";
import { CartCondext } from '../../../App'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import { FcSearch } from "react-icons/fc";

function NavigBar() {
  const { CartCount} = useContext(CartCondext)
  // const [UserDetails, setUserDetails] = useState()
useEffect(() => {
  const togglefunction =()=>{
    navTools.classList.toggle('is-active')


  }

let toggleBar = document.querySelector('.togglebar')
let navTools = document.querySelector('.nav-tools')

toggleBar.addEventListener('click',togglefunction)
}, [])

  


  const handlelogout = async () => {
    try {
      await auth.signOut()
      window.location.href = "/"
    } catch (error) {
      console.log(error.message);
    }
  }

  // const fetchUserData = async () => {
  //   auth.onAuthStateChanged(async (user) => {
  //     const docref = doc(db, "Users", user.uid)
  //     const docsnap = await getDoc(docref)
  //     if (docsnap.exists()) {
  //       setUserDetails(docsnap.data())
  //     } else {
  //       console.log("user is not logged i");
  //     }
  //   })
  // }

  // useEffect(() => {
  //   fetchUserData()
  // }, [])

  return (
    
    <nav>
    <div className='nav-div '>
    
      
    
     <div className="logo-div">
        <img className='logo' src={logo} alt="" />
        <Link className='brand-head' to={'/home'}>E-Shop</Link>
        </div>
        <Link style={{color:"black"}} to={'/mycart'}> <div className='cart-div'>
          <Badge className='cart-badge' bg="success">{CartCount}
          </Badge>
          <FaCartPlus className="cart-icon" />
        </div></Link>
        
      <div className="nav-tools">
     
      
       <div className='mycart-link'>
        <Link className='mycart-link' to={'/mycart'}>MyCart</Link>

       </div>
     
       

        {/* {UserDetails ? (
            <> */}
            <CgProfile className='user-icon' />
            <NavDropdown className='user-info' title="Fayiz" id="navbarScrollingDropdown" >
              <NavDropdown.Item >
              <Link className='mycart-drop' to={'/home'}>Home</Link>
              </NavDropdown.Item>
              <NavDropdown.Item ><Link className='mycart-drop' to={'/register'}>Register</Link></NavDropdown.Item>
              <NavDropdown.Item className='mycart-drop' onClick={handlelogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            {/* </> */}
        {/* ) : (
          <>
          
          <CgProfile className='user-icon' />
          </>
        )}
     */}
   
        </div>
        
        <HiOutlineBarsArrowDown className='togglebar'/>
      <a href='/home'> <FcSearch className='searchicon' /> </a> 
      </div>
      
      </nav>
  )
}

export default NavigBar