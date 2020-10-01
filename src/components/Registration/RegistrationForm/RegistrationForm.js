import React from 'react';

import { TextField } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../styles/_forms';
import './RegistrationForm.scss';
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";

function RegistrationForm(props) {

    function handleUserInput(event) {
        props.setRegistrationData({...props.registrationData, [event.target.id]: event.target.value.toString()});
    }

    return (
        <>
            {props.loginError &&
                <Alert
                    variant="filled"
                    severity="error"
                    role="alert"
                    className="login-alert"
                >
                    {props.loginMsg}
                </Alert>
            }
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
                    disabled={props.loader ? true : false}
                >
                    Sign Up
                    {props.loader &&
                    <ThemeProvider theme={theme}>
                        <CircularProgress size={16} className="loader"/>
                    </ThemeProvider>
                    }
                </button>
            </form>
        </>
    );
}

export default RegistrationForm;

