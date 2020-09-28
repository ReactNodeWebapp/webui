import React from 'react';

import Hero from '../../components/Hero/Hero';
import LoginContainer from '../../components/Login/LoginContainer/LoginContainer';

function LoginScreen() {
    return (
        <React.Fragment>
            <Hero height="480px"/>
            <LoginContainer/>
        </React.Fragment>
    );
}

export default LoginScreen;