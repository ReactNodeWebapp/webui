import React, {useContext, useEffect, useState} from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

import SidebarContext from "../../../context/SidebarContext";
import UserContext from "../../../context/UserContext";

import './Header.scss';

function Header({toggleUserProfileMenu, menuButtonBoxShadow}) {

    const {menu, setMenu} = useContext(SidebarContext);

    const [headerBoxShadow, setHeaderBoxShadow] = useState(false);

    const {user} = useContext(UserContext);

    function setMenuState() {
        setMenu(!menu);
    }

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                setHeaderBoxShadow(true);
            } else {
                setHeaderBoxShadow(false);
            }
        });
    });

    return (
        <>
            <header className={headerBoxShadow ? "header header--active" : "header"}>
                <a href='/'>
                    <img
                        src={require('../../../images/logo.png')}
                        className="header__logo"
                        alt="Brand logo"
                    />
                </a>
                <div className="header__items-container">
                    <a href="/products" className="header__item">Products</a>
                    <a href="/contact" className="header__item">Contact</a>
                    <a href="/about" className="header__item">About</a>
                </div>
                <div className="header__buttons-container">
                    {user.email ?
                        <div className={menuButtonBoxShadow === true ?
                                "header__user-wrapper header__user-wrapper--active"
                                :
                                "header__user-wrapper"
                            }
                            onClick={() => {
                                toggleUserProfileMenu();
                            }}
                        >
                            <Avatar
                                alt={user.firstName + " " + user.lastName}
                                className="header__user"
                            >
                                {user.firstName.charAt(0)}
                            </Avatar>
                        </div>
                        :
                        <>
                            <a
                                href="/login"
                                className="header__signin-btn"
                            >
                                Sign In
                            </a>
                            <a
                                href="/registration"
                                className="header__signup-btn"
                            >
                                Sign Up
                            </a>
                        </>
                    }
                    <MenuIcon
                        className="header__menu-icon"
                        onClick={setMenuState}
                    />
                </div>
            </header>
        </>
    );
}

export default Header;

