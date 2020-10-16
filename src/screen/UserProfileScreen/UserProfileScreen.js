import React, {useEffect, useState} from 'react';

import UserProfileContainer from "../../components/UserProfile/UserProfileContainer/UserProfileContainer";
import HeaderContainer from "../../components/Header/HeaderContainer/HeaderContainer";
import UserProfileSidebarContainer from "../../components/UserProfileSidebar/UserProfileSidebarContainer/UserProfileSidebarContainer";
import {USER_INFO} from "../../constants/UserProfileNavItemConstants";

function UserProfileScreen() {

    const [activeNavOption, setActiveNavOption] = useState(USER_INFO);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <UserProfileSidebarContainer
                activeNavOption={activeNavOption}
                setActiveNavOption={setActiveNavOption}
            />
            <HeaderContainer/>
            <UserProfileContainer
                activeNavOption={activeNavOption}
            />
        </>
    );
}

export default UserProfileScreen;