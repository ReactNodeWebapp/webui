import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import HeaderContainer from './components/Header/HeaderContainer/HeaderContainer';
import FooterContainer from './components/Footer/FooterContainer/FooterContainer';
import Sidebar from './components/Sidebar/Sidebar';
import SidebarContext from "./context/SidebarContext";

import './App.scss';

function App() {

  const [ menu, setMenu ] = useState(false);

  return (
    <SidebarContext.Provider value={{menu, setMenu}}>
      <BrowserRouter>
        <HeaderContainer/>
        <Sidebar/>
        <Routes/>
        <FooterContainer/>
      </BrowserRouter>
    </SidebarContext.Provider>
  );
}

export default App;
