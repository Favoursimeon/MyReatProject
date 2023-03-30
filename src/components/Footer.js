import React from "react";
import "../styles/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <InstagramIcon /> <TwitterIcon/> <FacebookIcon/> <WhatsAppIcon/>
       
      </div>
      
      <p> &copy; 2023 Lovelynfood.com</p>
    </div>
  );
}

export default Footer;   