import {CommuteOutlined} from "@mui/icons-material";
import { MenuList } from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {addToCart, decreaseCart, increaseCart, removeFromCart} from "../cartSlice";

function MenuItem(props) {
  const location = useLocation();
  let {image, name, price, order, id, quantity} = props;

  const [showCart, setShowCart] = useState(true);
  const [countItem, setItemCount] = useState(0);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(props));
  };

  const handleDecreaseCart = () => {
    dispatch(decreaseCart(props));  };

  const handleIncreaseCart = () => {
    dispatch(increaseCart(props));
  };

  const disabled = quantity <= 1 ? true : false;
  

  console.log(disabled)

  const core = {
    button: {
      padding: "6px 10px",
      margin: "0px 15px",
    },
    flex: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };



  return location.pathname !== '/Carts' ? (
    <>
      <div className="menuItem">
        <div style={{backgroundImage: `url(${image})`}}> </div>
        <h3> {name} </h3>
        <p> ${price} </p>
        <div style={core.flex}>
          <button  onClick={handleDecreaseCart} style={core.button} disabled={disabled}>-</button>
          <p>{location.pathname === "/Carts" ? `Quantity: ${quantity}` : ""}</p>
          <button onClick={handleIncreaseCart} style={core.button}>+</button>
        </div>

        {location.pathname === "/Carts" ? (
          <button onClick={() => dispatch(removeFromCart(id))} className="tran">
            Remove
          </button>
        ) : (
          <button onClick={handleAddToCart} className="tran">
            {order}
            {countItem > 0 && <>({countItem})</>}
          </button>
        )}
      </div>
    </>
  ) : (
    
        
          <tr>
            <td><div className="me" style={{backgroundImage: `url(${image})`}}> </div></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>


            <td>
            <button onClick={handleDecreaseCart} style={core.button} disabled={disabled} className="trans">-</button>
            <button onClick={handleIncreaseCart} style={core.button} className="trans">+</button>
            <button onClick={() => dispatch(removeFromCart(id))} className="tran">
            Remove
          </button>
            </td>
          </tr>

  );
}

export default MenuItem