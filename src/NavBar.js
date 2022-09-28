import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar =() => {
    return (
        <nav className="Navbar">
            <NavLink exact to="/">
                HOME
            </NavLink>
            <NavLink exact to="/chips">
                CHIPS
            </NavLink>
            <NavLink exact to="/popcorn">
                POPCORN
            </NavLink>
            <NavLink exact to="/soda">
                SODA
            </NavLink>
            <NavLink exact to="/reeses">
                PB CUPS
            </NavLink>
        </nav>
    )
}

export default NavBar;