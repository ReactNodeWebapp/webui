import React, {useState} from 'react';

import Header from '../Header/Header';

import UserMenuContainer from "../../UserMenu/UserMenuContainer/UserMenuContainer";

function HeaderContainer() {

    const [profileMenu, setProfileMenu] = useState(false);

    const toggleUserProfileMenu = () => {
        setProfileMenu(!profileMenu);
    }

    return (
        <>
            <Header
                toggleUserProfileMenu={toggleUserProfileMenu}
            />
            {profileMenu &&
            <UserMenuContainer
                profileMenu={profileMenu}
                toggleUserProfileMenu={toggleUserProfileMenu}
            />
            }

        </>
    )
}

export default HeaderContainer;
