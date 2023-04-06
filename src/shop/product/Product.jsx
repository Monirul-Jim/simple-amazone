import React from 'react';
import "./Product.css"

const Product = (props) => {
    const {img,name,price,seller,ratings,category}=props.product
    const addToCart=props.addToCart
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <h6>Name:{name}</h6>
           <h6>Product Price:{price}</h6>
           <h6>Seller:{seller}</h6>
           <h6>Category:{category}</h6>
           <h6>Ratings:{ratings}</h6>
           <button onClick={()=>addToCart(props.product)} className='button-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;