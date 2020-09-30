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

    const onRegistrationSubmit = async (event) => {
        event.preventDefault();
        const response = await register(registrationData);
        history.push('/thanks');
        console.log(response.data);
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