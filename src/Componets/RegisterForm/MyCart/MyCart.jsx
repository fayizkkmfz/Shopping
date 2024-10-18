import React, { useContext } from 'react'
import { CartCondext } from '../../../App'
import { Button, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './mycart.css'

function MyCart() {
    const {CartItems, setOrderProduct,setNavigBarShow} =useContext(CartCondext)
    setNavigBarShow(true)
    console.log(CartItems);
    const orderproduct=(orderitem)=>{
      
      setOrderProduct(orderitem);
      
          
    }
    
  return (
    <div className='mycart-bg'>
        <h1 className='mycart-head'>My-Cart</h1>
        <Table className='cart-table'>
    <thead>
      <tr>
        <th>ITEM</th>
        <th>PICTURE</th>
        <th>CATEGORY</th>
        <th>PRICE</th>
        <th></th>
      </tr>
    </thead>
    <br />
    <tbody className='tr'>
        {CartItems.map((item)=>{
            return(

            <>
      <tr>
        <td>{item.title}</td>
        <td><img className='thumbnail' src={item.thumbnail} alt="" /></td>
        <td>{item.category}</td>
        <td>{item.price}</td>
        <td><Link to={'/order'}><Button variant="light" className='order-btn' onClick={()=>orderproduct(item)}>Oreder Now</Button></Link></td>
      </tr><br />
      </>
            )
        })}
    </tbody>
  </Table>
  <div className="mobile-view">
  {CartItems.map((item)=>{
            return(

            <>

  <Card className='cards'>
      <Card.Img className='thumbnail' variant="top" src={item.thumbnail} />
      <Card.Body>
        <h2 className='card-title'>
         {item.title}
         </h2>
         
      </Card.Body>
      <h6 className='card-text'>
         Price : $ {item.price}
         </h6>
         <Link to={'/order'}><Button variant="light" className='order-btn' onClick={()=>orderproduct(item)}>Oreder Now</Button></Link>
    </Card>
    </>
            )
        })}

  </div>
  </div>
  )
}

export default MyCart