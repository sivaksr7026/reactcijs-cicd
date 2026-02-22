import React from 'react'
import "./Header.css"
import { useNavigate } from "react-router-dom";

const Header = () => {
 const navigate = useNavigate();

  const gotologin = () => {
    navigate("/login");
  };
   const gotoprofiles = () => {
    navigate("/profile");
  };

  return (
    <header className="header">

      <div className="header-left">
        <img 
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" 
          alt="image" 
        />
      </div>

      <div className="header-search">
        <input type="text" placeholder="Search for products, brands and more" />
      </div>

      <div className="header-right boldColor">
        <p onClick={gotologin}>Login</p>
        <p onClick={gotoprofiles}>Profile</p>
        <p>Cart</p>
        
      </div>

    </header>
  );
};

export default Header;
