import React, {useEffect} from 'react';

import Hero from '../../components/Hero/Hero';
import RegistrationContainer from '../../components/Registration/RegistrationContainer/RegistrationContainer';
import HeaderContainer from "../../components/Header/HeaderContainer/HeaderContainer";

function RegisterScreen() {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <HeaderContainer/>
            <Hero height="480px"/>
            <RegistrationContainer/>
        </>
    );
}

export default RegisterScreen;