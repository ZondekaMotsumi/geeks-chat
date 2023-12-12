import React, { useState } from "react";
import logo from "../../images/logo.png"
import {IconContext}  from "react-icons/lib";
import {FaBars, FaTimes } from "react-icons/fa";
import {Link, NavLink} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const mobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#ffffff" }}>
       <nav className="navbar">
           <div className="navbar-container container">
               <Link to="/" className="navbar-logo" onClick={mobileMenu}>
                   <img src={logo} className="navbar-logo" alt="Geeks logo" width="60px" height="60px"  />
                   Geeks Zone
               </Link>

               {/*Switch between close menu and open menu during mobile*/}
               <div className="menu-icon" onClick={handleClick}>
                   {
                       click?<FaTimes />:<FaBars/>
                   }
               </div>
               <ul className={
                   click ? "nav-menu active" : "nav-menu"
               }>
                   <li className="nav-items">
                       <NavLink
                           to="/"
                           className={({ isActive }) => {
                               let classNames = "nav-links";

                               if (isActive) {
                                   classNames += " activated";
                               }

                               return classNames;
                           }}
                           onClick={mobileMenu} > Home </NavLink>
                   </li>
                   <li className="nav-items">
                       <NavLink to="/login"
                                className={({ isActive }) => {
                                    let classNames = "nav-links";

                                    if (isActive) {
                                        classNames += " activated";
                                    }

                                    return classNames;
                                }}
                                onClick={mobileMenu}> Login </NavLink>
                   </li>
                   <li className="nav-items">
                       <NavLink to="/signup"
                                className={({ isActive }) => {
                                    let classNames = "nav-links";

                                    if (isActive) {
                                        classNames += " activated";
                                    }

                                    return classNames;
                                }}
                                onClick={mobileMenu}>Sign Up</NavLink>
                   </li>
               </ul>
           </div>
       </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
