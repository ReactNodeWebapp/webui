import React, {useContext, useEffect, useRef} from 'react';

import Avatar from "@material-ui/core/Avatar";

import {logout} from "../../../api/AuthService";
import UserContext from "../../../context/UserContext";

import './UserMenu.scss';

function UserMenu({
    showUserProfile,
    toggleUserProfileMenu
}) {

    const onClickOutside = useRef(null);

    const { user, changeUserStatus } = useContext(UserContext);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
    });

    const handleClickOutside = (event) => {
        if (onClickOutside.current && !onClickOutside.current.contains(event.target)) {
            toggleUserProfileMenu();
        }
    };

    return (
        <div
            className="profile-menu"
            ref={onClickOutside}
        >
            <div className="profile-menu__user">
                <Avatar
                    alt={user.firstName + " " + user.lastName}
                    className="profile-menu__user-icon"
                >
                    {user.firstName.charAt(0)}
                </Avatar>
                <div className="profile-menu__username">{user.firstName + " " + user.lastName}</div>
                <div className="profile-menu__user-email">{user.email}</div>
                <button
                    className="profile-menu__manage-account"
                    onClick={async () => {
                        await showUserProfile();
                        toggleUserProfileMenu();
                    }}
                >Manage your account
                </button>
            </div>
            <div className="profile-menu__signout-container">
                <button
                    className="profile-menu__signout"
                    onClick={async () => {
                        await logout();
                        changeUserStatus();
                        toggleUserProfileMenu();
                    }}
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
}

export default UserMenu;
