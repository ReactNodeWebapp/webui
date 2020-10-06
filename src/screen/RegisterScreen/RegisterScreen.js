import React, {useEffect} from 'react';

import RegistrationContainer from '../../components/Registration/RegistrationContainer/RegistrationContainer';
import HeaderContainer from "../../components/Header/HeaderContainer/HeaderContainer";

function RegisterScreen() {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <HeaderContainer/>
            <RegistrationContainer/>
        </>
    );
}

export default RegisterScreen;