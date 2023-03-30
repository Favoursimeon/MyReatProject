import React from "react";
import jollofrice from "../assets/jollofrice.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${jollofrice})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Foodlum restaurant and bar was launchedin East legon on march
           21 2023, we have built a loyal bas of customerswho enjoyed the
            delicious wide ranging menu and great service we offered. 
            Our restaurant offers an eclectic menu for the satisfaction and delight 
            of our customers, we have dishes from Ghana and around the world that have
             been crafted to ensure that our customers have a delicious variety to choose 
             from. 
             Our uniquely designed wine and spirits showroom holds a range of cognac, 
             single malt whiskey, champagne and of course wine for the benefit of our valued guests.
             we also organize a food challenge every weekend with new challengers and food lovers.
             <p>YOUR SATISFACTION IS OUR CONCERN</p>
        </p>
      </div>
    </div>
  );
}

export default About;