import React, { useState } from "react";
import "../../css/Cart/Cart.css";
//import Checkout from "../CheckoutForm/Checkout";
//import Bounce from "react-reveal/Bounce";
import Modal from "react-modal";
// import { connect } from 'react-redux';
// import { removeCart } from '../../store/actions/cart';
// import OrderModal from './OrderModal';
//import {createOrder, clearOrder} from '../../store/actions/orders'

function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {" "}
        {props.cartItems.length === 0 ? (
          "Cart Empty"
        ) : (
          <p>There is {props.cartItems.length} products in cart</p>
        )}{" "}
      </div>
      {/* Modal */}
      {/* <OrderModal cartItems={props.cartItems} order={props.order} closeModal={closeModal} /> */}

      <div className="cart-items">
        {props.cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.images[0].url} alt={item.title} />
            <div className="cart-info">
              <div>
                <p> title {item.title} </p>
                <p> qty: {item.qty} </p>
                <p> price: ${item.price} </p>
              </div>
              <button onClick={()=>props.removeFromCart(item)} >Remove</button>
            </div>
          </div>
        ))}
      </div>
{/* 
      {props.cartItems.length !== 0 && (
        <div className="cart-footer">
          <div className="total">
            Total : $
            {props.cartItems.reduce((acc, p) => {
              return acc + p.price;
            }, 0)}{" "}
          </div>
          <button onClick={() => setShowForm(true)}> select products </button>
        </div>
      )} */}

      {/* Checkout Form  */}
      {/* <Checkout
        showForm={showForm}
        submitOrder={submitOrder}
        setShowForm={setShowForm}
        handleChange={handleChange}
      /> */}
    </div>
  );
}
export default Cart;
