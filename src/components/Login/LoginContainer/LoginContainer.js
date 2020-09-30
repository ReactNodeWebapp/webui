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

    const onLoginSubmit = async (event) => {
        event.preventDefault();

        const response = await login(loginData);
        if(response.hasErrors) {
            setLoginMsg(response.message);
            setLoginError(true);
        } else {
            setLoginMsg("Successful login.");
            setLoginError(false);
        }
        //history.push('/profile');
    }

    return (
        <div className="form-wrapper">
            <h2 className="form-wrapper__title">Sign in to your account</h2>
            <LoginForm
                handleSubmit={onLoginSubmit}
                loginData={loginData}
                setLoginData={setLoginData}
                loginMsg={loginMsg}
                loginError={{loginError}}
            />
        </div>
    )
}

export default RegistrationContainer;