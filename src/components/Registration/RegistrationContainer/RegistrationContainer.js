import React, {useState} from 'react';
import {useHistory} from "react-router";

import RegistrationForm from '../RegistrationForm/RegistrationForm';
import { register } from '../../../api/RegistrationService';

import './RegistrationContainer.scss';

function RegistrationContainer() {

    const history = useHistory();

    const [ registrationData, setRegistrationData ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [ loginMsg, setLoginMsg ] = useState('');

    const [loginError, setLoginError] = useState(false);

    const [loader, setLoader] = useState(false);

    const onRegistrationSubmit = async (event) => {
        event.preventDefault();
        setLoader(true);

        const response = await register(registrationData);
        setTimeout(() => {
            if(response.hasErrors) {
                setLoader(false);
                setLoginError(true);
                setLoginMsg(response.message);
            } else {
                setLoader(false);
                setLoginError(false);
                //history.push('/home');
            }
        }, 300);
    }

    return (
        <div className="form-wrapper">
            <h2 className="form-wrapper__title">Create a new account</h2>
            <RegistrationForm
                handleSubmit={onRegistrationSubmit}
                registrationData={registrationData}
                setRegistrationData={setRegistrationData}
                loader={loader}
                loginMsg={loginMsg}
                loginError={loginError}
            />
        </div>
    )
}

export default RegistrationContainer;