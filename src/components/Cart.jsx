import React from 'react'
import "../styles/Cart.css"
import {removeFromBasket } from '../redux/actions'
import { useSelector, useDispatch, } from "react-redux"
function Cart() {
  const cartState = useSelector(state => state.cart)
  console.log(cartState)
  const dispatch = useDispatch()
  const handleRemove = (value) => {
    console.log(value)
     dispatch(removeFromBasket(value))
  }
  const cartComponent = cartState.map(i => {
    return <div className="cartList d-flex  flex-row p-3 justify-content-between" key={ i._id} flex-2>
      <div className="carList__items d-flex  flex-column justify-content-center align-items-start">
        <h2 className="p-1">Name: <span>{i.name}</span> </h2>
        <h2 className="p-1">variants: <span>{i.variant}</span> </h2>
        <h2 className="p-1">Quantity: <span>{i.quantity}</span> </h2>
        <h2 className="p-1">Price: <span>{i.quantity}</span> </h2>
        <button className="add px-2 py-2 btn"
          onClick={
            () => {
              handleRemove(i.id)
          }
          }>
          Remove From Basket
        </button>
    </div>
        <div className="cartList__pic d-flex ml-auto p-2" >
        <img src={ i.image } alt="image of a Pizza Added" />
       </div>
      </div>

   })

  return (
    <div className="container-fluid d-flex  flex-row ">
      <div className="col">
      <div className="cart d-flex flex-column ">
      <h1 className="d-flex justify-content-center mb-3 align-items-center">My Cart</h1>
      <div className="d-flex flex-column m-3">
      {cartState.length > 0 ? cartComponent : <h2> No item added to Cart</h2>}   
    </div>
          
    </div>
      </div>


    </div>
  )
}

export default Cart