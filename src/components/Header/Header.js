import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';

import { HamburgerIcon } from 'react-hamburger-icon';
import Avatar from '@material-ui/core/Avatar';

import './Header.scss';
import '../../styles/_variables.scss';
import SidebarContext from "../../context/SidebarContext";
import UserContext from "../../context/UserContext";

function Header(props) {

    const [menuIcon, setMenuIcon] = useState(false);

    const [backgroundColor, setBackgroundColor] = useState("transparent");

    const { menu, setMenu } = useContext(SidebarContext);

    const { user } = useContext(UserContext);

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
        <>
            <header
                className="header"
                style={{backgroundColor: backgroundColor}}
            >
                <HamburgerIcon
                    open={menuIcon}
                    onClick={setMenuState}
                    animation={
                        {
                            duration: 250,
                            easing: "ease-in"
                        }
                    }
                    className="header__menu-icon"
                />
                <div className="header__buttons-container">
                    {user.email ?
                        <Avatar
                            alt={user.firstName + " " + user.lastName}
                            className="header__user"
                            onClick={() => {
                                props.setProfileMenu(!props.profileMenu);
                            }}
                        >
                            {user.firstName.charAt(0)}
                        </Avatar>
                        :
                        <>
                            <Link to="/login" className="header__btn eggshell">Sign In</Link>
                            <Link to="/registration" className="header__btn leather">Sign Up</Link>
                        </>
                    }
                </div>
            </header>
        </>
    );
}

export default Header;

