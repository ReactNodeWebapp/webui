import React, { useContext, useState, useEffect } from 'react';

import { HamburgerIcon } from 'react-hamburger-icon';

import SidebarContext from '../../context/SidebarContext';

import './Header.scss';
import '../../styles/_variables.scss';
import { Link } from 'react-router-dom';

function Header() {

    const [ menuIcon, setMenuIcon ] = useState(false);

    const [ backgroundColor, setBackgroundColor ] = useState("transparent");

    const { menu, setMenu } = useContext(SidebarContext);

    function setMenuState() {
        setMenu(!menu);
        setMenuIcon(!menuIcon);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setBackgroundColor("#0F1626");
            } else {
                setBackgroundColor("transparent");
            }
        });
      }, []);

    return (
        <header 
            className="header"
            style={{backgroundColor: backgroundColor}}
        >
            <HamburgerIcon 
                open={menuIcon} 
                onClick={() => setMenuState()} 
                animation={
                    {
                        duration: 250,
                        easing: "ease-in"
                    }
                }
                className="header__menu-icon" 
            />
            <div className="header__buttons-container">
                <Link to="/login" className="header__btn eggshell">Sign In</Link>
                <Link to="/registration" className="header__btn leather">Sign Up</Link>
            </div>
        </header>
    );
}

export default Header;

