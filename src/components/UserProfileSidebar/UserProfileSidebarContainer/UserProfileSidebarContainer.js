import React from 'react';

import UserProfileSidebar from "../UserProfileSidebar/UserProfileSidebar";

function UserProfileSidebarContainer(props) {
    return (
        <UserProfileSidebar
            activeNavOption={props.activeNavOption}
            setActiveNavOption={props.setActiveNavOption}
        />
    );
}

export default UserProfileSidebarContainer;