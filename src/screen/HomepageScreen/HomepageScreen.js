import React, {useContext} from 'react';

import HeaderContainer from "../../components/Header/HeaderContainer/HeaderContainer";
import FooterContainer from "../../components/Footer/FooterContainer/FooterContainer";
import SliderContainer from "../../components/Slider/Slider/SliderContainer";
import HeaderWrapper from "../../components/HeaderWrapper/HeaderWrapper";

import './HomepageScreen.scss';

function HomepageScreen() {

    return (
        <>
            <HeaderWrapper/>
            <SliderContainer/>
            <FooterContainer/>
        </>
    );
}

export default HomepageScreen;