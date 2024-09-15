import React, { useContext } from 'react'
import { CartCondext } from '../../../App'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function MyCart() {
    const {CartItems, setOrderProduct,setNavigBarShow} =useContext(CartCondext)
    setNavigBarShow(true)
    console.log(CartItems);
    const orderproduct=(orderitem)=>{
      
      setOrderProduct(orderitem);
      
          
    }
    
  return (
    <div>
        <h1>My Cart</h1>
        <Table striped bordered hover>
    <thead>
      <tr>
        <th>ITEM</th>
        <th>Picture</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
        {CartItems.map((item)=>{
            return(

      
      <tr>
        <td>{item.title}</td>
        <td><img src={item.thumbnail} alt="" /></td>
        <td>{item.price}</td>
        <td><Link to={'/order'}><button onClick={()=>orderproduct(item)}>Oreder Now</button></Link></td>
      </tr>
            )
        })}
    </tbody>
  </Table></div>
  )
}

export default MyCart