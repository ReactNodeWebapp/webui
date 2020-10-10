import React, {useContext} from 'react';

import UserContext from "../../../context/UserContext";
import {getUserProfile} from "../../../api/UserProfileService";
import UserMenu from "../UserMenu/UserMenu";

function UserMenuContainer({
    profileMenu,
    toggleUserProfileMenu
}) {

    const {user} = useContext(UserContext);

    const showUserProfile = async () => {
        const response = await getUserProfile(user);

        if (response.hasErrors) {
            Object.keys(user).forEach(property => user[property] = '');
        } else {
            window.location.assign(`/${user.firstName + user.lastName}`);
        }
    }

    return (
        <UserMenu
            showUserProfile={showUserProfile}
            profileMenu={profileMenu}
            toggleUserProfileMenu={toggleUserProfileMenu}
        />
    )
}

export default UserMenuContainer;