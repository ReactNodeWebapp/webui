import React, {useState} from 'react';

import Header from '../Header/Header';

import UserMenuContainer from "../../UserMenu/UserMenuContainer/UserMenuContainer";

function HeaderContainer() {

    const [profileMenu, setProfileMenu] = useState(false);

    const [menuButtonBoxShadow, setMenuButtonBoxShadow] = useState(false);

    const toggleUserProfileMenu = () => {
        setProfileMenu(!profileMenu);
        setMenuButtonBoxShadow(!menuButtonBoxShadow);
    }

    // NA DVA MJESTA SAM PREDAO ISTU STVAR - toggleUserProfileMenu()
    return (
        <>
            <Header
                toggleUserProfileMenu={toggleUserProfileMenu}
                menuButtonBoxShadow={menuButtonBoxShadow}
            />
            {profileMenu &&
                <UserMenuContainer
                    toggleUserProfileMenu={toggleUserProfileMenu}
            />
            }

        </>
    )
}

export default HeaderContainer;
