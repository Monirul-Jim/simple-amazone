import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const {cart}=props
    let total=0;
    let totalShipping=0;
    let totalTax=0;
    let grandTotal=0;
    let quantity=0;
    for(const product of cart){
        if(product.quantity==0){
            product.quantity=1
        }
        total=total+product.price+product.quantity;
        totalShipping=totalShipping+product.shipping;
        totalTax=total*7/100;
        grandTotal=total+totalShipping+totalTax
        quantity=quantity+product.quantity
    }
    return (
        <div className='total-shopping'>
            <h1>Order Summary</h1>
            <h6>Selected Item:{quantity}</h6>
            <h5>Total:{total}</h5>
            <h5>Total Shipping:{totalShipping}</h5>
            <h5>Tax:{totalTax}</h5>
            <hr />
            <h5>GrandTotal:{grandTotal}</h5>
        </div>
    );
};

export default Cart;