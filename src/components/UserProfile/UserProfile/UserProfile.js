import React, {useContext, useEffect, useState} from 'react';

import axios from "axios";

import Avatar from "@material-ui/core/Avatar";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {TextField} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import UserContext from "../../../context/UserContext";

import './UserProfile.scss';
import theme from "../../../styles/_forms";

function UserProfile() {

    const {user} = useContext(UserContext);

    const [country, setCountry] = useState('');

    const [city, setCity] = useState('');

    useEffect(() => {
        const nav = navigator.geolocation?.getCurrentPosition(async (position) => {
            const geocode = await axios.get(`https://us1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATION_TOKEN}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`);
            setCountry(geocode.data.address.country);
            setCity(geocode.data.address.city);
        }, () => {
            return '';
        });
    });

    return (
        <div className="profile-data">
            <div className="profile-data__user">
                <Avatar
                    alt={user.firstName + " " + user.lastName}
                    className="profile-data__user-icon"
                >
                    {String(user.firstName).charAt(0)}
                </Avatar>
                <div className="profile-data__user-name-cnt">
                    <p className="profile-data__user-name">{user.firstName} {user.lastName}</p>
                    <div>
                        <LocationOnIcon/>
                        <span className="profile-data__user-location">{city}, {country}</span>
                    </div>
                </div>
            </div>
            <form
                className="profile-data__change-data-form"
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
                        value={user.firstName}

                    />

                    <TextField
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        variant="outlined"
                        type="text"
                        fullWidth={true}
                        autoComplete="family-name"
                        value={user.lastName}

                    />

                    <TextField
                        id="email"
                        name="email"
                        label="E-mail"
                        variant="outlined"
                        type="text"
                        fullWidth={true}
                        autoComplete="email"
                        value={user.email}

                    />

                </ThemeProvider>
                <button
                    type="submit"
                    className="registration-form__submit-btn"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
}

export default UserProfile;