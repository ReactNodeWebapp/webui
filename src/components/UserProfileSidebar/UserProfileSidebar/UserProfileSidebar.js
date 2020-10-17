import React from 'react';

import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {USER_INFO, NOTIFICATIONS, SETTINGS, WATCHLIST, FAVORITES} from "../../../constants/UserProfileNavItemConstants";

import './UserProfileSidebar.scss';

function UserProfileSidebar({
    activeNavOption,
    setActiveNavOption
}) {

    return (
        <div className="user-profile-sidebar">
            <h4 className="user-profile-sidebar__title">User Profile</h4>
            <nav>
                <ul className="user-profile-sidebar__nav-items">
                    <li className={activeNavOption === USER_INFO ?
                        "user-profile-sidebar__nav-item active"
                        :
                        "user-profile-sidebar__nav-item"}
                        onClick={() => setActiveNavOption(USER_INFO)}
                    >
                        <PermIdentityIcon/>
                        <span className="user-profile-sidebar__nav-item-text">User info</span>
                    </li>
                    <li className={activeNavOption === FAVORITES ?
                        "user-profile-sidebar__nav-item active"
                        :
                        "user-profile-sidebar__nav-item"}
                         onClick={() => setActiveNavOption(FAVORITES)}
                    >
                        <FavoriteBorderIcon/>
                        <span className="user-profile-sidebar__nav-item-text">Favorites</span>
                    </li>
                    <li className={activeNavOption === WATCHLIST ?
                        "user-profile-sidebar__nav-item active"
                        :
                        "user-profile-sidebar__nav-item"}
                        onClick={() => setActiveNavOption(WATCHLIST)}
                    >
                        <StarBorderIcon/>
                        <span className="user-profile-sidebar__nav-item-text">Watchlist</span>
                    </li>
                    <li className={activeNavOption === SETTINGS ?
                        "user-profile-sidebar__nav-item active"
                        :
                        "user-profile-sidebar__nav-item"}
                        onClick={() => setActiveNavOption(SETTINGS)}
                    >
                        <SettingsIcon/>
                        <span className="user-profile-sidebar__nav-item-text">Settings</span>
                    </li>
                    <li className={activeNavOption === NOTIFICATIONS ?
                        "user-profile-sidebar__nav-item active"
                        :
                        "user-profile-sidebar__nav-item"}
                        onClick={() => setActiveNavOption(NOTIFICATIONS)}
                    >
                        <NotificationsNoneIcon/>
                        <span className="user-profile-sidebar__nav-item-text">Notifications</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default UserProfileSidebar;