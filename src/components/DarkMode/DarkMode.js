import './DarkMode.css';
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";

import React from 'react';

// import { useState } from 'react';

// import useLocalStorage from 'use-local-storage';


const DarkMode = () => {

  const setDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark')
    localStorage.setItem("selectedTheme", "dark")
  }

  const setLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light')
    localStorage.setItem("selectedTheme", "light")
  }

  const selectedTheme = localStorage.getItem("selectedTheme")

  if(selectedTheme === "dark"){
    setDarkMode()
  }

  const toggleTheme = (e) => {
    if(e.target.checked) setDarkMode()
    else setLightMode()
  }


  return (
    <div className='dark-mode'>
      <input className='dark-mode-input' type='checkbox' id='darkmode-toggle' onChange={toggleTheme} defaultChecked={selectedTheme === "dark"} />
      <label className='dark-mode-label' for='darkmode-toggle'>
        <Sun/>
        <Moon/>
      </label>
    </div>
  );
};

export default DarkMode
