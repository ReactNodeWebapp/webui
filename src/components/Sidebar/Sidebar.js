import React, { useContext, useEffect } from 'react';

import RedeemIcon from '@material-ui/icons/Redeem';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import TelegramIcon from '@material-ui/icons/Telegram';
import HomeIcon from '@material-ui/icons/Home';

import SidebarContext from '../../context/SidebarContext';

import './Sidebar.scss';
import { Link } from 'react-router-dom';

function Sidebar() {

    const { menu, setMenu } = useContext(SidebarContext);


    // how to solve this in React way
    useEffect(() => {
        menu ? document.body.style.cssText = "padding-left: 180px; overflow: hidden;" 
            : document.body.style.cssText = "padding-left: 0px; overflow: unset;";
    }, [menu]);
    
    return (
        <React.Fragment>
            { menu &&
                <div className={menu ? "sidebar active" : "sidebar"}>
                    <nav className="sidebar__nav">
                        <ul className="sidebar__list">
                            <li className="sidebar__item" onClick={() => setMenu(false)}>
                                <a href="/" className="sidebar__item-link">
                                <RedeemIcon className="sidebar__icon"/>
                                    <span className="sidebar__item-name">Products</span>
                                </a>
                            </li>
                            <li className="sidebar__item" onClick={() => setMenu(false)}>
                                <a href="/" className="sidebar__item-link">
                                    <AnnouncementIcon className="sidebar__icon"/>
                                    <span className="sidebar__item-name">News</span>
                                </a>
                            </li>	
                            <li className="sidebar__item" onClick={() => setMenu(false)}>
                                <a href="/" className="sidebar__item-link">
                                    <PeopleAltIcon className="sidebar__icon"/>
                                    <span className="sidebar__item-name">About</span>
                                </a>
                            </li>	
                            <li className="sidebar__item" onClick={() => setMenu(false)}>
                                <a href="/" className="sidebar__item-link">
                                <TelegramIcon className="sidebar__icon"/>
                                    <span className="sidebar__item-name">Contact</span>
                                </a>
                            </li>			
                        </ul>
                    </nav>
                    <div className="sidebar__bottom-buttons">
                        <Link className="sidebar__home-icon" to="/home" onClick={() => setMenu(false)}>
                            <HomeIcon className="sidebar__icon"/>
                        </Link>
                    </div>
                </div>
            }
        </React.Fragment>
    );
}

export default Sidebar;