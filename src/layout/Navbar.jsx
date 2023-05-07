import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './layout.css'

import components from '../components/index.js'

export default function Navbar() {

    // Active Route
    const [currentRoute, setCurrentRoute] = useState("/");
    const location = useLocation();

    useEffect(() => {
        setCurrentRoute(location.pathname)
    }, [location]);

    // Mobile Menu
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
      const hamburger = document.getElementById("burger");
    
      const handleClick = (e) => {
        e.stopPropagation();
        setToggleMenu(!toggleMenu);
        console.log("a");
      };
    
      hamburger.addEventListener("click", handleClick);
    
      return () => {
        hamburger.removeEventListener("click", handleClick);
      };
    }, [toggleMenu]);

    return (
        <header>
            <nav className='nb-container'>
                <h1 className='nb-text'>TODOLIST</h1>
                <ul className={'nb-list' + (toggleMenu ? " nb-collapse" : "")}>
                    <li className='nb-element'>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "nb-active" : "")}
                            isActive={() => currentRoute === '/'}
                        >
                            <components.ButtonGeneric content='Home' active={currentRoute === '/'} />
                        </NavLink>
                    </li>
                    <li className='nb-element'>
                        <NavLink
                            to="/app"
                            className={({ isActive }) => (isActive ? "nb-active" : "")}
                            isActive={() => currentRoute === '/app'}
                        >
                            <components.ButtonGeneric content='App' active={currentRoute === '/app'} />
                        </NavLink>
                    </li>
                </ul>
                <label className="burger" htmlFor="burger">
                    <input type="checkbox" id="burger" />
                        <span></span>
                        <span></span>
                        <span></span>
                </label>
            </nav>
        </header>
    )
}
