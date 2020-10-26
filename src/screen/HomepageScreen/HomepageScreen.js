import React from 'react';

import Hero from '../../components/Hero/Hero';
import HeaderContainer from "../../components/Header/HeaderContainer/HeaderContainer";
import FooterContainer from "../../components/Footer/FooterContainer/FooterContainer";

import './HomepageScreen.scss';

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