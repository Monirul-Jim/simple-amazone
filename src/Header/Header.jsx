import React from 'react';
import "./Header.css"
import img from "../images/Logo.svg"

const Header = () => {
    return (
        <div className='header'>
            <img src={img} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;