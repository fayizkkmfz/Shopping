import React, { useContext, useState } from 'react'
import { CartCondext } from '../../../App'

function Order() {
    const {CartItems,OrderProduct, setOrderProduct} =useContext(CartCondext)
    const [Quantity, setQuantity] = useState(1)
    const [UpdatedPrice, setUpdatedPrice] = useState(OrderProduct.price)
    console.log(OrderProduct);
    const IncreaseQuantity=()=>{
        setQuantity(Quantity+1)
        setUpdatedPrice(UpdatedPrice+OrderProduct.price)
    }
    const DecreaseQuantity=()=>{
      setQuantity(Quantity-1)
      setUpdatedPrice(UpdatedPrice-OrderProduct.price)
  }
    
  return (
    <div className='row'>
        <div>
            <img src={OrderProduct.thumbnail} alt="" />
        </div>
        <div>

        <h1>{OrderProduct.title}</h1>
        <button onClick={IncreaseQuantity}>+</button>{Quantity}<button onClick={DecreaseQuantity}>-</button>
        <button>Confirm</button>
        <p>Price: {OrderProduct.price}</p>
        <h5>Total Amount: {UpdatedPrice}</h5>
        </div>
    
    </div>
  )
}

export default Order