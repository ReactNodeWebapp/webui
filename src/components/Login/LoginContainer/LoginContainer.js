import React, {useContext, useState} from 'react';
import { useHistory } from "react-router";

import * as Yup from "yup";
import { useFormik } from "formik";

import LoginForm from "../LoginForm/LoginForm";
import { login } from '../../../api/AuthService';

import './LoginContainer.scss';
import UserContext from "../../../context/UserContext";

function RegistrationContainer() {

    const history = useHistory();

    const [loader, setLoader] = useState(false);

    const {  changeUserStatus } = useContext(UserContext);

    const onLoginSubmit = async (values) => {
        setLoader(true);

        const response = await login({
            email: values.email,
            password: values.password
        });
        setTimeout(() => {
            if(response.hasErrors) {
                formik.setErrors(response.message.includes('Incorrect password.') ?
                    {password: response.message} : {email: response.message}
                );
            } else {
                localStorage.setItem("currentUser", JSON.stringify({
                    loggedInAt: response.user.date,
                    firstName: response.user.firstName,
                    lastName: response.user.lastName,
                    email: response.user.email
                }));
                changeUserStatus();
                history.push('/home');
            }
            setLoader(false);
        }, 300);
    }

    const formFields = {
        email: Yup.string()
            .email('Incorrect e-mail format.')
            .required('E-mail is required.'),
        password: Yup.string()
            .required('Password is required.')
    }

    const loginSchema = Yup.object().shape(formFields);

    const formikInitValues = {
        email: '',
        password: ''
    }

    const formik = useFormik({
        initialValues: formikInitValues,
        validationSchema: loginSchema,
        onSubmit: values => {
            onLoginSubmit(values);
        }
    });

    return (
        <div className="form-wrapper">
            <h2 className="form-wrapper__title">Sign in to your account</h2>
            <LoginForm
                formik={formik}
                loader={loader}
            />
        </div>
    )
}

export default RegistrationContainer;