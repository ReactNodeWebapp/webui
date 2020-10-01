import React from 'react';

import { TextField } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

import theme from '../../../styles/_forms';
import './LoginForm.scss';

function LoginForm(props) {

    function handleUserInput(event) {
        props.setLoginData({...props.loginData, [event.target.id]: event.target.value.toString()});
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
                className="login-form"
                onSubmit={props.handleSubmit}
            >
                <ThemeProvider theme={theme}>
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
                </ThemeProvider>
                <button
                    type="submit"
                    className="login-form__submit-btn"
                    disabled={props.loader ? true : false}
                >
                    Sign In
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

export default LoginForm;

