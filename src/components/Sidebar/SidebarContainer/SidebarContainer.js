import React, {useContext, useEffect} from 'react';

import Sidebar from "../Sidebar/Sidebar";
import SidebarContext from "../../../context/SidebarContext";

import './SidebarContainer.scss';

function SidebarContainer() {

    const {menu} = useContext(SidebarContext);

    useEffect(() => {

        menu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    }, [menu]);

    return (
        <>
            {menu &&
            <div className="sidebar-wrap">
                <Sidebar/>
            </div>
            }
        </>
    );
}

export default SidebarContainer;