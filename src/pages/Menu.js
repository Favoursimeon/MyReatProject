import React from 'react';
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { useState } from 'react';
import { EndPoint } from '../Services/ApiCall';
import { useEffect } from 'react';
import axios from 'axios';

function Menu() {

  const [productData, setProductData] = useState([])

  const loadData = async () => {
    try {
      const response = await axios.get(`${EndPoint}/Products`)
      setProductData(response.data)
      
    } catch (error) {
      console.log(error)
    }
  }


  // console.log(productData)

  useEffect(()=>{
    loadData()
  },[])
  return (
    
    
          <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            
            <div className="menuList">
        {productData.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              order={menuItem.order}
              id={menuItem.id}
            />
          );
        })}
      </div>
            </div>
         
    
  );
}


export default Menu;