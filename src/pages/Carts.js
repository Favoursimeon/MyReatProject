import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import MenuItem from '../components/MenuItem'
import "../styles/Menu.css";

const Carts = () => {
 const cart = useSelector(state => state.cart.cart);

 console.log(cart)
  return (
    <div className="menu">
    <h1 className="menuTitle">Your Cart</h1>
    <h1>{cart.length === 0 ? "No Items Added" : ""}</h1>

    <div className="menuList">
    {cart?.map((menuItem, key) => {
      return (
        <MenuItem
          key={key}
          image={menuItem.image}
          name={menuItem.name}
          price={menuItem.price}
          order={menuItem.order}
          id={menuItem.id}
          quantity={menuItem.quantity}
        />
      );
    })}
</div>
    </div>  )
}

export default Carts