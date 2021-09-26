import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    let newTotal = 0;
    let tax= 0;
    let fullTotal = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
        newTotal = total + shipping;
        tax = newTotal + (newTotal/10);
        fullTotal = newTotal +tax;
    }
    // const {price} = props.product;
    return (
        <div className ="cart">
            <h3 className = "center-align">Order Summary</h3>
            <h6 className = "center-align">Items Ordered:{props.cart.length}</h6>
            <h6>Items:      {total.toFixed(2)}$</h6>           
            <h6>Shipping & Handling:        {shipping.toFixed(2)}$</h6>
            <h6>Total before tax:       {newTotal.toFixed(2)}$</h6>
            <h6><span>Estimated Tax:      {tax.toFixed(2)}$</span></h6>
            <h3 className= "total">Order Total:        {fullTotal.toFixed(2)}$</h3>
            <button className=" regular-btn"><span className= "center-align">Review Your Order</span></button>
        </div>
    );
};

export default Cart;