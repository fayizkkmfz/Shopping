import React, { useContext, useEffect, useState } from 'react'
import NavigBar from './NavigBar'
import axios from 'axios'
import { Button, Card, Table } from 'react-bootstrap'
import './Home.css'
import { CartCondext } from '../../../App'
import { useNavigate } from 'react-router-dom'

function Home() {
  const Navig=useNavigate()
  const {CartCount,setCartCount,CartItems, setCartItems} =useContext(CartCondext)
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
    
    
    
  }, [])
  console.log(Products);
  return (
    <div className='row'>
    <NavigBar />
         

        
        {Products.map((product)=>{
          return(

            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button onClick={()=>AddToCart(product)} variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>

        
            
        
          )
        })}
       
    </div>
  )
}

export default Home