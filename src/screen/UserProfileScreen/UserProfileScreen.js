import React, {useEffect} from 'react';

import UserProfileContainer from "../../components/UserProfile/UserProfileContainer/UserProfileContainer";
import HeaderContainer from "../../components/Header/HeaderContainer/HeaderContainer";

function UserProfileScreen() {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <HeaderContainer/>
            <UserProfileContainer/>
        </>
    );
}

export default UserProfileScreen;