import React from 'react';

import Hero from '../../components/Hero/Hero';
import HeaderContainer from "../../components/Header/HeaderContainer/HeaderContainer";

import './HomepageScreen.scss';
import FooterContainer from "../../components/Footer/FooterContainer/FooterContainer";

function HomepageScreen() {

    return (
        <>
            <HeaderContainer/>
            <Hero/>
            <FooterContainer/>
        </>
    );
}

export default HomepageScreen;