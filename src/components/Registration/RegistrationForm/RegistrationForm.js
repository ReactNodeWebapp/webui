import React from 'react';

import { TextField } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../styles/_forms';
import './RegistrationForm.scss';

function RegistrationForm(props) {

    function handleUserInput(event) {
        props.setRegistrationData({...props.registrationData, [event.target.id]: event.target.value.toString()});
    }

    return (
        <form
            className="registration-form"
            onSubmit={props.handleSubmit}
        >
            <ThemeProvider theme={theme}>
                <TextField 
                    id="firstName"
                    label="First name"
                    variant="outlined"
                    type="text"
                    fullWidth={true}
                    autoComplete="name"
                    onChange={handleUserInput}
                />
                <TextField 
                    id="lastName"
                    label="Last name"
                    variant="outlined"
                    type="text"
                    fullWidth={true}
                    autoComplete="family-name"
                    onChange={handleUserInput}
                />
                <TextField 
                    id="email" 
                    label="E-mail" 
                    variant="outlined"
                    type="text"
                    fullWidth={true}
                    autoComplete="email"
                    onChange={handleUserInput}
                />
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth={true}
                    autoComplete="new-password"
                    onChange={handleUserInput}
                />
                <TextField
                    id="passwordRepeat"
                    label="Password repeat"
                    variant="outlined"
                    type="password"
                    fullWidth={true}
                    autoComplete="new-password"
                />
            </ThemeProvider>
            <button
                type="submit"
                className="registration-form__submit-btn"
            >
                Sign Up
            </button>
        </form>
    );
}

export default RegistrationForm;

