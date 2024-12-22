import React, { useContext, useEffect, useState } from 'react'

import axios from 'axios'
import { Button, Card, Form} from 'react-bootstrap'
import './Home.css'
import { CartCondext } from '../../../App'
import { Link } from 'react-router-dom'


function Home() {
  
  const {CartCount,setCartCount,CartItems, setCartItems,setNavigBarShow,SearchText, setSearchText} =useContext(CartCondext)
  const [Products, setProducts] = useState([])
  const API ='https://dummyjson.com/products'

  const AddToCart=(CartProduct)=>{
    const selctedProduct=[...CartItems,CartProduct]
    setCartItems(selctedProduct)
    setCartCount(CartCount+1)
    
  }
  useEffect(() => {
    axios.get(API).then((res)=>{
      setProducts(res.data.products);
      
    })
    
    setNavigBarShow(true)
    
  }, [setNavigBarShow])
  console.log(Products);
  console.log(SearchText);
  
  return (
    <div className='home-bg'>
        <div className="search">
        <Form >
          <Form.Control
            type="search"
            placeholder="Search Product"
            className="text-center"
            aria-label="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
          
        </Form>
        </div>
    
    <div className='row' >
        {Products.filter((item)=>item.title.includes(SearchText)).map((product)=>{
          return(
            

            

            <Card className='cards'>
      <Card.Img className='thumbnail' variant="top" src={product.thumbnail} />
      <Card.Body>
        <h2 className='card-title'>
         {product.title}
         </h2>
         
      </Card.Body>
      <h6 className='card-text'>
         Price : $ {product.price}
         </h6>
      <Button variant="light" className='addtocart-btn' onClick={()=>AddToCart(product)}>Add To Cart</Button>
    </Card>
    

        
            
        
          )
        })}
       
    <Link className='copyright' to="https://www.linkedin.com/in/fayiz-kk/" target="_blank"><span>Developed By &copy; fayizkk</span></Link>
    </div>
    </div>
  )
}

export default Home