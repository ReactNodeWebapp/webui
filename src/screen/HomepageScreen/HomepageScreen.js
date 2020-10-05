import React from 'react';

import Hero from '../../components/Hero/Hero';
import HeaderContainer from "../../components/Header/HeaderContainer/HeaderContainer";

import './HomepageScreen.scss';

function HomepageScreen() {

    return (
        <>
            <HeaderContainer/>
            <Hero height="100vh"/>
            <div style={{height: "1000px"}}></div>
        </>
    );
}

export default HomepageScreen;