import React, {useEffect, useState} from 'react';

import { TextField } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress";

import theme from '../../../styles/_forms';
import './RegistrationForm.scss';

function RegistrationForm(props) {

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(Object.values(props.formik.values).some(value => {
            return value === '';
        }))
    }, [props.formik.values]);

    return (
        <form
            className="registration-form"
            onSubmit={props.formik.handleSubmit}
        >
            <ThemeProvider theme={theme}>
                <TextField
                    id="firstName"
                    name="firstName"
                    label="First name"
                    variant="outlined"
                    type="text"
                    fullWidth={true}
                    autoComplete="name"
                    value={props.formik.values.firstName}
                    onChange={props.formik.handleChange}

                />
                {props.formik.errors.firstName
                    && props.formik.touched.firstName
                    && <span className="validation-error-msg">{props.formik.errors.firstName}</span>
                }

                <TextField
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    variant="outlined"
                    type="text"
                    fullWidth={true}
                    autoComplete="family-name"
                    value={props.formik.values.lastName}
                    onChange={props.formik.handleChange}

                />
                {props.formik.touched.lastName
                    && props.formik.errors.lastName
                    && <span className="validation-error-msg">{props.formik.errors.lastName}</span>
                }

                <TextField
                    id="email"
                    name="email"
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
                    id="password"
                    name="password"
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


                <TextField
                    id="passwordRepeat"
                    name="passwordRepeat"
                    label="Confirm password"
                    variant="outlined"
                    type="password"
                    fullWidth={true}
                    autoComplete="new-password"
                    value={props.formik.values.passwordRepeat}
                    onChange={props.formik.handleChange}

                />
                {props.formik.touched.passwordRepeat
                    && props.formik.errors.passwordRepeat
                    && <span className="validation-error-msg">{props.formik.errors.passwordRepeat}</span>
                }


            </ThemeProvider>
            <button
                type="submit"
                className="form-wrapper__submit-btn"
                disabled={props.loader || disabled}
            >
                Sign Up
                {props.loader &&
                    <ThemeProvider theme={theme}>
                        <CircularProgress size={16} className="form-wrapper__loader"/>
                    </ThemeProvider>
                }
            </button>
        </form>
    );
}

export default RegistrationForm;

