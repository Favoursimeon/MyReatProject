import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { decreaseCart, increaseCart } from '../cartSlice';
import MenuItem from '../components/MenuItem'
import {useDispatch} from "react-redux";
import "../styles/Carts.css"

const Carts = () => {
  const decrese = () => {

  }
  const [quant, setQuant] = useState()
 const cart = useSelector(state => state.cart.cart);

 console.log(cart)
  return (
    <div className="menu">
    <h1 className="menuTitle">Your Cart</h1>
    <h1>{cart.length === 0 ? "No Items Added" : ""}</h1>

    <div className="">
    <table>
         <thead>
          <tr>
           <th>IMAGE</th>
            <th>ITEMS</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
    {cart?.map((menuItem, key) => {
      console.log('menuitem', menuItem)
      return (
      <>
        
        <MenuItem
          key={key}
          image={menuItem.image}
          name={menuItem.name}
          price={menuItem.price}
          order={menuItem.order}
          id={menuItem.id}
          quantity={menuItem.quantity}
        />
      </>
      
      );
    })}
        </tbody>

    </table>

</div>
    </div>  )
}

export default Carts