import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Routes from './Routes';
import FooterContainer from './components/Footer/FooterContainer/FooterContainer';
import SidebarContainer from "./components/Sidebar/SidebarContainer/SidebarContainer";
import SidebarContext from "./context/SidebarContext";
import UserContext from "./context/UserContext";
import {checkJwtStatus, logout} from "./api/AuthService";

import './App.scss';

function App() {

    const [menu, setMenu] = useState(false);

    const [userStatus, setUserStatus] = useState(false);

    const [user, setUser] = useState({});

    function getCurrentUserInfo() {
        const user = localStorage.getItem("currentUser");
        setUser(JSON.parse(user) || {
            loggedInAt: '',
            firstName: '',
            lastName: '',
            email: ''
        });
    }

    function changeUserStatus() {
        setUserStatus(!userStatus);
    }

    useEffect(() => {

        getCurrentUserInfo();

    }, [userStatus]);

    useEffect(  () => {
        (async () => {
            const response = await checkJwtStatus();
            if(!response.status) {
                Object.keys(user).forEach(property => user[property] = '');
                await logout();
            }
        })();
    });

    return (
        <UserContext.Provider value={{user, changeUserStatus}}>
            <SidebarContext.Provider value={{menu, setMenu}}>
                <BrowserRouter>
                    <SidebarContainer/>
                    <Routes/>
                    <FooterContainer/>
                </BrowserRouter>
            </SidebarContext.Provider>
        </UserContext.Provider>
    );
}

export default App;
