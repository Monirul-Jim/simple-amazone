import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../fakedb/fakedb';
import Cart from './cart/Cart';
import Product from './product/Product';
import "./Shop.css"
const Shop = () => {
    const [products,setProduct]=useState([])
    useEffect(()=>{
        fetch("packeg.json")
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        const savedCart=[]
        const storedCart=getShoppingCart()
        for(const id in storedCart){
            const addedProduct=products.find(product=>product.id===id)
            if(addedProduct){
                const quantity=storedCart[id]
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    },[products])
    const addToCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
       addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div>
                {/* <h1>product container</h1> */}
                <div className='product-container'>
                {
                    products.map(product=><Product product={product} key={product.id} addToCart={addToCart} ></Product>)
                }
                </div>


            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;