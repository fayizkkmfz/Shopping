import React, { useContext, useEffect, useState } from 'react'

import axios from 'axios'
import { Button, Card} from 'react-bootstrap'
import './Home.css'
import { CartCondext } from '../../../App'


function Home() {
  
  const {CartCount,setCartCount,CartItems, setCartItems,setNavigBarShow,SearchText} =useContext(CartCondext)
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

    
    <div className='row' >
        {Products.filter((item)=>item.title.toLowerCase().includes(SearchText)).map((product)=>{
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
      <Button className='addtocart-btn' onClick={()=>AddToCart(product)} variant="primary">Add To Cart</Button>
    </Card>
    

        
            
        
          )
        })}
       
    </div>
    </div>
  )
}

export default Home