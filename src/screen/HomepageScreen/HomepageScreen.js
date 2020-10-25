import React from 'react';

import Hero from '../../components/Hero/Hero';
import HeaderContainer from "../../components/Header/HeaderContainer/HeaderContainer";
import FooterContainer from "../../components/Footer/FooterContainer/FooterContainer";
import UpperHeaderContainer from "../../components/UpperHeader/UpperHeaderContainer/UpperHeaderContainer";

import './HomepageScreen.scss';

function HomepageScreen() {

    return (
        <>
            <UpperHeaderContainer/>
            <HeaderContainer/>
            <Hero/>
            <FooterContainer/>
        </>
    );
}

export default HomepageScreen;