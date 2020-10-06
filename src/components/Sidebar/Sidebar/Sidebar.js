import React, {useContext, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';

import Clear from '@material-ui/icons/Clear';
import RedeemIcon from '@material-ui/icons/Redeem';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import TelegramIcon from '@material-ui/icons/Telegram';
import HomeIcon from '@material-ui/icons/Home';

import SidebarContext from '../../../context/SidebarContext';
import UserContext from "../../../context/UserContext";

import './Sidebar.scss';

function Sidebar() {

    const {menu, setMenu} = useContext(SidebarContext);


    const {user} = useContext(UserContext);

    const onClickOutside = useRef(null);

    const setMenuState = () => {
        setMenu(!menu);
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
    });

    const handleClickOutside = (event) => {
        if (onClickOutside.current && !onClickOutside.current.contains(event.target)) {
            setMenuState();
        }
    };

    return (
        <>
            {menu &&
                <div
                    className="sidebar"
                    ref={onClickOutside}
                >
                    <div className="sidebar__close-cnt">
                        <Clear className="sidebar__close" onClick={setMenuState}/>
                    </div>
                    <nav className="sidebar__nav">
                        <ul className="sidebar__list">
                            <li className="sidebar__item" onClick={setMenuState}>
                                <a href="/" className="sidebar__item-link">
                                    <RedeemIcon className="sidebar__icon"/>
                                    <span className="sidebar__item-name">Products</span>
                                </a>
                            </li>
                            <li className="sidebar__item" onClick={setMenuState}>
                                <a href="/" className="sidebar__item-link">
                                    <AnnouncementIcon className="sidebar__icon"/>
                                    <span className="sidebar__item-name">News</span>
                                </a>
                            </li>
                            <li className="sidebar__item" onClick={setMenuState}>
                                <a href="/" className="sidebar__item-link">
                                    <PeopleAltIcon className="sidebar__icon"/>
                                    <span className="sidebar__item-name">About</span>
                                </a>
                            </li>
                            <li className="sidebar__item" onClick={setMenuState}>
                                <a href="/" className="sidebar__item-link">
                                    <TelegramIcon className="sidebar__icon"/>
                                    <span className="sidebar__item-name">Contact</span>
                                </a>
                            </li>
                        </ul>
                        {!user.email &&
                            <div className="sidebar__signup-signin-container">
                            <div className="sidebar__signup" onClick={setMenuState}>
                                <a href="/registration" className="sidebar__item-link">
                                    <span className="sidebar__item-name">Sign Up</span>
                                </a>
                            </div>
                            <div className="sidebar__signin" onClick={setMenuState}>
                                <a href="/login" className="sidebar__item-link">
                                    <span className="sidebar__item-name">Sign In</span>
                                </a>
                            </div>
                        </div>}
                    </nav>
                    <div className="sidebar__bottom-buttons">
                        <Link className="sidebar__home-icon" to="/home">
                            <HomeIcon className="sidebar__icon" onClick={setMenuState}/>
                        </Link>
                    </div>
                </div>
            }
        </>
    );
}

export default Sidebar;