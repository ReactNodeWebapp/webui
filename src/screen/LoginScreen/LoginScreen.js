import React, {useEffect} from 'react';

import LoginContainer from '../../components/Login/LoginContainer/LoginContainer';
import HeaderContainer from "../../components/Header/HeaderContainer/HeaderContainer";
import FooterContainer from "../../components/Footer/FooterContainer/FooterContainer";
import UpperHeaderContainer from "../../components/UpperHeader/UpperHeaderContainer/UpperHeaderContainer";

function LoginScreen() {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <UpperHeaderContainer/>
            <HeaderContainer/>
            <LoginContainer/>
            <FooterContainer/>
        </>
    );
}

export default LoginScreen;