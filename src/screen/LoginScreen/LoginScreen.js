import React, {useEffect} from 'react';

import Hero from '../../components/Hero/Hero';
import LoginContainer from '../../components/Login/LoginContainer/LoginContainer';
import HeaderContainer from "../../components/Header/HeaderContainer/HeaderContainer";

function LoginScreen() {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <HeaderContainer/>
            <LoginContainer/>
        </>
    );
}

export default LoginScreen;