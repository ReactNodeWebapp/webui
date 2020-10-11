import React from 'react';

import { TextField } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import theme from '../../../styles/_forms';
import './LoginForm.scss';

function LoginForm(props) {
    return (
        <form
            className="login-form"
            onSubmit={props.formik.handleSubmit}
        >
            <ThemeProvider theme={theme}>
                <TextField
                    name="email"
                    id="email"
                    label="E-mail"
                    variant="outlined"
                    type="text"
                    fullWidth={true}
                    autoComplete="email"
                    value={props.formik.values.email}
                    onChange={props.formik.handleChange}
                />
                {props.formik.touched.email
                    && props.formik.errors.email
                    && <span className="validation-error-msg">{props.formik.errors.email}</span>
                }

                <TextField
                    name="password"
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    fullWidth={true}
                    autoComplete="new-password"
                    value={props.formik.values.password}
                    onChange={props.formik.handleChange}
                />
                {props.formik.touched.password
                    && props.formik.errors.password
                    && <span className="validation-error-msg">{props.formik.errors.password}</span>
                }

            </ThemeProvider>
            <button
                type="submit"
                className="form-wrapper__submit-btn"
                disabled={props.loader ? true : false}
            >
                Sign In
                {props.loader &&
                    <ThemeProvider theme={theme}>
                        <CircularProgress size={16} className="form-wrapper__loader"/>
                    </ThemeProvider>
                }
            </button>
        </form>
    );
}

export default LoginForm;

