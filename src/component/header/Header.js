import React from "react";
import logo from './../../images/logo.svg'
import {useState} from 'react'

function Header() {
  const [drop, setdrop] = useState(false)



  return (
    <header>
      <div className="nav-top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav className="navbar" onClick={()=>setdrop(!drop)}>
          <ul className={drop ? 'invisible list': 'invisible'}>
            <li>About</li>
            <li>Discover</li>
            <li>Get Started</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
