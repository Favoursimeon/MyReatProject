import React, { useState } from "react";
import Logo from "../assets/logo.jpeg";
import { Link} from "react-router-dom"; 
import "../styles/Navbar.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CardTravelSharp } from "@mui/icons-material";
import { useSelector } from "react-redux";


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const cart = useSelector(state=> state.cart.cart)
 const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <>
    {/* <ul>
        
        <li><Link to ="/Menu" >Menu</Link></li>
        <li><Link to ="/About" />About</li>
        <li><Link to ="/" />Hii</li>
    </ul> */}
   
     <div className="navbar">
       <div className="leftSide" id={openLinks ? "open" : "close"}>
         <img src={Logo} alt=""/>
         <div className="hiddenLinks">
           <Link to="/"> Home </Link>
           <Link to="/menu"> Menu </Link>
           <Link to="/about"> About </Link>
           <Link to="/contact"> Contact </Link>
           <Link to="/Carts"> <ShoppingCartOutlinedIcon /> </Link>

         {/* <h6><ShoppingCartOutlinedIcon /></h6>   */}

           
         </div>
       </div>
       <div className="rightSide">
         <Link to="/"> Home </Link>
         <Link to="/menu"> Menu </Link>
         <Link to="/about"> About </Link>
         <Link to="/contact"> Contact </Link>
        <Link to="/Carts"> <ShoppingCartOutlinedIcon  style={{color:"#f2f2f2"}} />{cart.length}</Link>
         <button onClick={ShoppingCartOutlinedIcon}> 
         </button>

         
       </div>
     </div>









     
    </>
  );
}

export default Navbar;