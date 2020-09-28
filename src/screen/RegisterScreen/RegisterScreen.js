import React from 'react';

import Hero from '../../components/Hero/Hero';
import RegistrationContainer from '../../components/Registration/RegistrationContainer/RegistrationContainer';

function RegisterScreen() {
    return (
        <React.Fragment>
            <Hero height="480px"/>
            <RegistrationContainer/>
        </React.Fragment>
    );
}

export default RegisterScreen;