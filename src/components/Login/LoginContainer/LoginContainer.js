import React, {useState} from 'react';
import {useHistory} from "react-router";

import './LoginContainer.scss';
import LoginForm from "../LoginForm/LoginForm";

function RegistrationContainer() {

    const history = useHistory();

    const [ loginData, setLoginData ] = useState({
        email: "",
        password: ""
    });

    const onLoginSubmit = async () => {

    }

    return (
        <div className="form-wrapper">
            <h2 className="form-wrapper__title">Sign in to your account</h2>
            <LoginForm
                handleSubmit={onLoginSubmit}
                loginData={loginData}
                setLoginData={setLoginData}
            />
        </div>
    )
}

export default RegistrationContainer;