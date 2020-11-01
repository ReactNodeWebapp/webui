import React from 'react';

import HeaderContainer from "../../components/Header/HeaderContainer/HeaderContainer";
import FooterContainer from "../../components/Footer/FooterContainer/FooterContainer";
import SliderContainer from "../../components/Slider/Slider/SliderContainer";
import UpperHeaderContainer from "../../components/UpperHeader/UpperHeaderContainer/UpperHeaderContainer";

import './HomepageScreen.scss';

function HomepageScreen() {

    return (
        <>
            <UpperHeaderContainer/>
            <HeaderContainer/>
            <SliderContainer/>
            <FooterContainer/>
        </>
    );
}

export default HomepageScreen;