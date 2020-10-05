import React, {useContext, useState} from 'react';
import {useHistory} from "react-router";

import Avatar from "@material-ui/core/Avatar";

import Header from '../Header';
import UserContext from "../../../context/UserContext";
import { logout } from "../../../api/AuthService";
import {getUserProfile} from "../../../api/UserProfileService";

import './HeaderContainer.scss';

function HeaderContainer(props) {

    const history = useHistory()

    const [ profileMenu, setProfileMenu ] = useState(false);

    const { user, changeUserStatus } = useContext(UserContext);

    const showUserProfile = async () => {
        const response = await getUserProfile(user);

        if(response.hasErrors) {
            Object.keys(user).forEach(property => user[property] = '');
        } else {
            history.push(`/${user.firstName + user.lastName}`);
        }
    }

    return (
        <div className="header-wrap">
            <Header
                profileMenu={profileMenu}
                setProfileMenu={setProfileMenu}t
            />
            {profileMenu && user.email &&
                <div className="profile-menu">
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
                                setProfileMenu(!profileMenu);
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
                                setProfileMenu(!profileMenu);
                            }}
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default HeaderContainer;
