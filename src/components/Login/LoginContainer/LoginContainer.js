import React, {useState} from 'react';
import {useHistory} from "react-router";

import LoginForm from "../LoginForm/LoginForm";
import { login } from '../../../api/AuthService';

import './LoginContainer.scss';

function RegistrationContainer() {

    const history = useHistory();

    const [ loginData, setLoginData ] = useState({
        email: "",
        password: ""
    });

    const [ loginMsg, setLoginMsg ] = useState('');

    const [loginError, setLoginError] = useState(false);

    const [loader, setLoader] = useState(false);

    const onLoginSubmit = async (event) => {
        event.preventDefault();
        setLoader(true);

        const response = await login(loginData);
        setTimeout(() => {
            if(response.hasErrors) {
                setLoader(false);
                setLoginError(true);
                setLoginMsg(response.message);
            } else {
                setLoader(false);
                setLoginError(false);
                history.push('/home');
            }
        }, 300);
    }

    return (
        <div className="form-wrapper">
            <h2 className="form-wrapper__title">Sign in to your account</h2>
            <LoginForm
                handleSubmit={onLoginSubmit}
                loginData={loginData}
                setLoginData={setLoginData}
                loader={loader}
                loginMsg={loginMsg}
                loginError={loginError}
            />
        </div>
    )
}

export default RegistrationContainer;