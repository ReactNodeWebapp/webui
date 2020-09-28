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

    const onRegistrationSubmit = async () => {
        const response = await register(registrationData);
        console.log(response.message)
        if (response.status === 200) {
            history.push("/thank-you");
        } else {
            console.log(response);
        }
    }

    return (
        <div className="form-wrapper">
            <h2 className="form-wrapper__title">Create your free account</h2>
            <RegistrationForm
                handleSubmit={onRegistrationSubmit}
                registrationData={registrationData}
                setRegistrationData={setRegistrationData}
            />
        </div>
    )
}

export default RegistrationContainer;