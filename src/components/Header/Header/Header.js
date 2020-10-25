import React, {useContext, useEffect, useState} from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

import SidebarContext from "../../../context/SidebarContext";
import UserContext from "../../../context/UserContext";

import './Header.scss';

function Header({toggleUserProfileMenu}) {

    const {menu, setMenu} = useContext(SidebarContext);

    const [boxShadow, setBoxShadow] = useState(false);

    const {user} = useContext(UserContext);

    function setMenuState() {
        setMenu(!menu);
    }

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                setBoxShadow(true);
            } else {
                setBoxShadow(false);
            }
        });

    });

    return (
        <>
            <header className={boxShadow ? "header header--box-shadow" : "header"}>
                <a href='/'>
                    <img
                        src={require('../../../images/logo.png')}
                        className="header__logo"
                        alt="Brand logo"
                    />
                </a>
                <div className="header__buttons-container">
                    <span className="header__products">Products</span>
                    <span className="header__about">About</span>
                    <span className="header__contact">Contact</span>
                    {user.email ?
                        <div
                            className="header__user-wrapper"
                            onClick={() => {
                                toggleUserProfileMenu();
                                document
                                    .getElementsByClassName('header__arrow-down')[0]
                                    .classList
                                    .toggle('active');
                            }}
                        >
                            <Avatar
                                alt={user.firstName + " " + user.lastName}
                                className="header__user"
                            >
                                {user.firstName.charAt(0)}
                            </Avatar>
                            <i className="header__arrow-down"></i>
                        </div>
                        :
                        <>
                            <a
                                href="/login"
                                className="header__btn header__signin-btn"
                            >
                                Sign In
                            </a>
                            <a
                                href="/registration"
                                className="header__btn header__signout-btn"
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

