import React from 'react';

import Hero from '../../components/Hero/Hero';
import HeaderContainer from "../../components/Header/HeaderContainer/HeaderContainer";
import FooterContainer from "../../components/Footer/FooterContainer/FooterContainer";
import SliderContainer from "../../components/Slider/Slider/SliderContainer";

import './HomepageScreen.scss';

function HomepageScreen() {

    return (
        <>
            <HeaderContainer/>
            <SliderContainer/>
            <FooterContainer/>
        </>
    );
}

export default HomepageScreen;