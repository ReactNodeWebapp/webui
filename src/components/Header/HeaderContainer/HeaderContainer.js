import React, {useContext, useState} from 'react';
import {useHistory} from "react-router";

import Avatar from "@material-ui/core/Avatar";

import Header from '../Header';
import UserContext from "../../../context/UserContext";
import { logout } from "../../../api/AuthService";

import './HeaderContainer.scss';

function HeaderContainer() {

    const history = useHistory()

    const [ profileMenu, setProfileMenu ] = useState(false);

    const { user, changeUserStatus } = useContext(UserContext);

    return (
        <div className="header-wrap">
            <Header
                profileMenu={profileMenu}
                setProfileMenu={setProfileMenu}
            />
            {profileMenu && user &&
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
                            onClick={() => setProfileMenu(!profileMenu)}
                        >Manage your account
                        </button>
                    </div>
                    <div className="profile-menu__signout-container">
                        <button
                            className="profile-menu__signout"
                            onClick={() => {
                                logout();
                                changeUserStatus();
                                setProfileMenu(!profileMenu);
                                history.push('/home')
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
