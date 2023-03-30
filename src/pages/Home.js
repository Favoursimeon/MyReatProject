import React from "react";
import { Link, } from "react-router-dom";
import BannerImage from "../assets/reataurant.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Foodlum's World </h1>
        
        <p><h5> YUMMY TO FIT ANY TASTE </h5></p>
       <Link to="/Menu">SEE MENU</Link> 
       {/* <Routes> <Route path="/Menu" Component={Menu } /> ORDER NOW </Routes> */}
          
        
      </div>
      {/* <Outlet/> */}
    </div>
  );
}

export default Home;