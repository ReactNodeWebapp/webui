import React, {useEffect} from 'react';

import RegistrationContainer from '../../components/Registration/RegistrationContainer/RegistrationContainer';
import HeaderContainer from "../../components/Header/HeaderContainer/HeaderContainer";
import FooterContainer from "../../components/Footer/FooterContainer/FooterContainer";

function RegisterScreen() {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <HeaderContainer/>
            <RegistrationContainer/>
            <FooterContainer/>
        </>
    );
}

export default RegisterScreen;