import React, {useState} from 'react';
import {useHistory} from "react-router";

import * as Yup from "yup";
import { useFormik } from "formik";

import RegistrationForm from '../RegistrationForm/RegistrationForm';
import { register } from '../../../api/RegistrationService';

import './RegistrationContainer.scss';

function RegistrationContainer() {

    const history = useHistory();

    const [loader, setLoader] = useState(false);

    const onRegistrationSubmit = async (values) => {
        setLoader(true);

        const response = await register({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password
        });

        setTimeout(() => {
            if(response.hasErrors) {
                formik.setErrors({email: response.message});
            } else {
                //history.push('/home');
            }
            setLoader(false);
        }, 300);
    }

    const registrationFormFields = {
        firstName: Yup.string()
            .required('First name is required.')
            .max(20, "Maximum number of characters is 20.")
            .matches(/^[A-Za-zDŠĐŽĆČšđčćž ]+$/, "First name contains only letters."),
        lastName: Yup.string()
            .required('Last name is required.')
            .max(40, "Maximum number of characters is 40.")
            .matches(/^[A-Za-zDŠĐŽĆČšđčćž ]+$/, "Last name contains only letters."),
        email: Yup.string()
            .email('Incorrect e-mail format.')
            .required('E-mail is required.'),
        password: Yup.string()
            .required('Password is required.')
            .max(60, "Maximum number of characters is 60.")
            .min(8, "Minimum number of characters is 8.")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
                "Password needs to include both upper and lower case character and at least one number."
            ),
        passwordRepeat: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords don't match.")
            .required('Password confirm is required.')
    }

    const registrationSchema = Yup.object().shape(registrationFormFields);

    const formikInitValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordRepeat: ''
    }

    const formik = useFormik({
        initialValues: formikInitValues,
        validationSchema: registrationSchema,
        onSubmit: values => {
            onRegistrationSubmit(values);
        }
    });


    return (
        <div className="form-wrapper">
            <h2 className="form-wrapper__title">Create a new account</h2>
            <RegistrationForm
                formik={formik}
                loader={loader}
            />
        </div>
    )
}

export default RegistrationContainer;