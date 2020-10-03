import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import axios from 'axios';

import Routes from './Routes';
import HeaderContainer from './components/Header/HeaderContainer/HeaderContainer';
import FooterContainer from './components/Footer/FooterContainer/FooterContainer';
import Sidebar from './components/Sidebar/Sidebar';
import SidebarContext from "./context/SidebarContext";
import UserContext from "./context/UserContext";

import './App.scss';

function App() {

  const [ menu, setMenu ] = useState(false);

  const [ userStatus, setUserStatus ] = useState(false);

  const [ user, setUser ] = useState({});

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


  axios.defaults.withCredentials = true;

  return (
    <UserContext.Provider value={{user, changeUserStatus}}>
      <SidebarContext.Provider value={{menu, setMenu}}>
        <BrowserRouter>
          <HeaderContainer/>
          <Sidebar/>
          <Routes/>
          <FooterContainer/>
        </BrowserRouter>
      </SidebarContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
