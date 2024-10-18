import React, { useContext, useState } from 'react'
import { CartCondext } from '../../../App'
import './order.css'
import { Rate } from 'antd';
import { Button } from 'react-bootstrap';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { SiGmail } from "react-icons/si";

function Order() {
  const { OrderProduct, setNavigBarShow } = useContext(CartCondext)
  const [Quantity, setQuantity] = useState(1)
  const [UpdatedPrice, setUpdatedPrice] = useState(OrderProduct.price)
  console.log(OrderProduct);
  setNavigBarShow(true)
  const IncreaseQuantity = () => {
    setQuantity(Quantity + 1)
    setUpdatedPrice(Math.floor(UpdatedPrice + OrderProduct.price))
  }
  const DecreaseQuantity = () => {
    setQuantity(Quantity - 1)
    setUpdatedPrice(Math.floor(UpdatedPrice - OrderProduct.price))
  }
  console.log(OrderProduct);

  return (
    <>
      <div className='order-bg'>
        <div className='order-img-bg'>
          <img className='order-img' src={OrderProduct.images ? OrderProduct.images[0] : OrderProduct.thumbnail} alt="" />
        </div>
        <div className='order-details'>
          <h1 className='fw-bold'>{OrderProduct.title}</h1>
          <h4>{OrderProduct.brand}</h4>
          <Rate className='order-rating' disabled defaultValue={OrderProduct.rating} />
          <hr />
          <p className='order-description'>{OrderProduct.description}</p>
          <hr />
          <div className='price-div' >
            <p className='m-0 fw-bold'>Price: {OrderProduct.price}</p>
            Quantity :<CiCircleMinus className='quantity-btn' onClick={DecreaseQuantity} />
            {Quantity}<CiCirclePlus className='quantity-btn' onClick={IncreaseQuantity} />
            <h5 className='fw-bolder'>Total Amount: {UpdatedPrice}</h5>
            <Button variant="light" className='confirm-btn'>Confirm</Button>
          </div>
        </div>
      </div>
      <div className='order-images'>
        {OrderProduct.images.map((image => {
          return (
            <img className='images' src={image} alt="" />
          )
        }))}
      </div>
      <div className='review-div'>
        <h5 className='fw-bolder'>Customer Reviews</h5>
        {OrderProduct.reviews.map((review => {
          return (
            <div className='review-box'>
              <h6 className='text-start ms-3 mt-2'><CgProfile /> {review.reviewerName}</h6>
              <h6 className='text-start ms-3 mt-2'>Rating :<Rate className='order-rating' disabled defaultValue={review.rating} /></h6>
              <h6>Comment : {review.comment}</h6>
              <h6 className='text-end me-2'><SiGmail /> : {review.reviewerEmail}</h6>
              <h6 className='text-end me-2'>posted on date : {review.date}</h6>
            </div>
          )

        }))}
      </div>
    </>
  )
}

export default Order