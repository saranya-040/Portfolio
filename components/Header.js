import React from 'react';
import './Header.css';
import IMAGE from './IMAGE.jpg';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={IMAGE} alt="Name" />
        <h1 className="overlay-text">Sai Lakshmi Saranya Marni</h1>
        <p className="developer-text">Frontend Developer</p>
        
      </div>
    </header>
  );
}

export default Header;
