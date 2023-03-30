import { CommuteOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart, removeFromCart } from "../cartSlice";

function MenuItem(props) {
  const location = useLocation()
  let { image, name, price, order,id} = props;

const [showCart, setShowCart] = useState(true)
  const [countItem, setItemCount] = useState(0)
  const dispatch = useDispatch()

  const handleAddToCart = () =>{
    dispatch(addToCart(props))
  }

  return (
    <>
      <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h3> {name} </h3>
      <p> ${price} </p>
      {location.pathname === '/Carts' ?   
        <button onClick={() => dispatch(removeFromCart(id))} className="tran" > Remove </button>  : <button onClick={handleAddToCart} className="tran" > {order} 
      {countItem>0 && <>({countItem})</>}
        </button> 
        }

      </div>
    </>

  );
}

export default MenuItem;