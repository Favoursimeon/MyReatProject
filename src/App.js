
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carts from "./pages/Carts";
import { useEffect, useState } from "react";

function App() {

  return (
    <div className="App">
       <Router> 
        <Navbar /> 
        {/* <Home/> */}
          <Routes>
          <Route path="/" Component={Home } />
           <Route path="menu" Component={Menu } />
           <Route path="about" Component={About } />
           <Route path="contact" Component={Contact } />
           <Route path="carts" Component={Carts } />

          </Routes>
       </Router> 
     
    </div>
  );
}

export default App;





























