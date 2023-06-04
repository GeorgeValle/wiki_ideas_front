//import React from 'react';
import logo from '../assets/logo_dark.svg';

import './Nav.css';
import { NavLink } from "react-router-dom";

const Nav = () => {

    return (
        <nav>
            <img
                alt="logo"
                src={logo}
                className="logo"
            />

            <div className="routes pull_down">
                <NavLink  className={({isActive}) => (isActive?"active_nav_item nav_item":"nav_item")} to='/' >Home</NavLink>
                <NavLink className={({isActive}) => (isActive?"active_nav_item nav_item":"nav_item")} to='articles' >Articles</NavLink>

            </div>
        </nav>
    );
};

export default Nav;