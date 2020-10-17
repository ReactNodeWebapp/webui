import React, {useContext, useEffect, useState} from 'react';

import axios from "axios";

import Avatar from "@material-ui/core/Avatar";
import {TextField} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import EditIcon from '@material-ui/icons/Edit';
import {shallowEqual} from 'recompose';

import UserContext from "../../../context/UserContext";

import './UserInfo.scss';
import theme from "../../../styles/_forms";

function UserInfo({
    location,
    setLocation,
    formik,
    loader,
    onImageChange,
    userImageUrl
}) {

    const {user} = useContext(UserContext);

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        getGeolocation();
    }, []);

    useEffect(() => {
        setDisabled(shallowEqual(formik.initialValues, formik.values));
    }, [formik.values]);

    const getGeolocation = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const geocode = await axios.get(`https://us1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATION_TOKEN}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`);
                setLocation(`${geocode.data.address.city}, ${geocode.data.address.country}`);
            }, (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        setLocation('User denied the request for Geolocation.');
                        break;
                    case error.POSITION_UNAVAILABLE:
                        setLocation('Location information is unavailable.');
                        break;
                    default:
                        setLocation('Retrieving user location an unknown error occurred.');
                        break;
                }
            });
        } else {
            setLocation('Geolocation is not supported by this browser.');
        }
    }

    return (
        <div className="profile-data">
            <div className="profile-data__user">
                <div className="profile-data__user-image-wrapper">
                    <Avatar
                        src={userImageUrl}
                        alt={user.firstName + " " + user.lastName}
                        className="profile-data__user-icon"
                    >
                        {String(user.firstName).charAt(0)}
                    </Avatar>
                    <label htmlFor="image-chooser">
                        <EditIcon
                            className="profile-data__edit-image"
                            type="file"
                        />
                    </label>
                    <input
                        id="image-chooser"
                        className="profile-data__image-chooser"
                        type="file"
                        onChange={onImageChange}
                    />
                </div>
                <div className="profile-data__user-name-cnt">
                    <p className="profile-data__user-name">{user.firstName} {user.lastName}</p>
                    <div className="profile-data__user-location-container">
                        <span className="profile-data__user-location">{location}</span>
                    </div>
                </div>
            </div>
            <form
                className="profile-data__change-data-form"
                onSubmit={formik.handleSubmit}
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
                            value={formik.values.firstName || ''}
                            onChange={formik.handleChange}
                            spellCheck="false"
                        />
                        {formik.errors.firstName
                            && formik.touched.firstName
                            && <span className="validation-error-msg">{formik.errors.firstName}</span>
                        }

                        <TextField
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            variant="outlined"
                            type="text"
                            fullWidth={true}
                            autoComplete="family-name"
                            value={formik.values.lastName || ''}
                            onChange={formik.handleChange}
                            spellCheck="false"
                        />
                        {formik.errors.firstName
                            && formik.touched.firstName
                            && <span className="validation-error-msg">{formik.errors.firstName}</span>
                        }

                        <TextField
                            id="email"
                            name="email"
                            label="E-mail"
                            variant="outlined"
                            type="text"
                            fullWidth={true}
                            autoComplete="email"
                            value={formik.values.email || ''}
                            onChange={formik.handleChange}
                            spellCheck="false"
                        />
                        {formik.errors.firstName
                            && formik.touched.firstName
                            && <span className="validation-error-msg">{formik.errors.firstName}</span>
                        }

                        <TextField
                            id="telephoneNumber"
                            name="telephoneNumber"
                            label="Telephone Number"
                            variant="outlined"
                            type="text"
                            fullWidth={true}
                            autoComplete="tel"
                            value={formik.values.telephoneNumber || ''}
                            onChange={formik.handleChange}
                            spellCheck="false"
                        />
                        {formik.errors.firstName
                            && formik.touched.firstName
                            && <span className="validation-error-msg">{formik.errors.firstName}</span>
                        }

                    </ThemeProvider>
                    <button
                        type="submit"
                        className="form-wrapper__submit-btn"
                        style={{marginTop: ".5rem"}}
                        disabled={loader || disabled}
                    >
                        Save Changes
                        {loader &&
                            <ThemeProvider theme={theme}>
                                <CircularProgress size={16} className="form-wrapper__loader"/>
                            </ThemeProvider>
                        }
                    </button>
            </form>
        </div>
    );
}

export default UserInfo;