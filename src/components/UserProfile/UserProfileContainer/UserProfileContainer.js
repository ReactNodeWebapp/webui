import React, {useContext, useEffect, useState} from 'react';

import * as Yup from "yup";
import {useFormik} from "formik";

import UserInfo from "../UserInfo/UserInfo";
import {updateUserData} from "../../../api/UpdateUserDataService";
import UserContext from "../../../context/UserContext";
import {getUserImage, updateUserImage} from "../../../api/UserImageService";
import {USER_INFO, NOTIFICATIONS, SETTINGS, WATCHLIST, FAVORITES} from "../../../constants/UserProfileNavItemConstants";

import './UserProfileContainer.scss';

function UserProfileContainer(props) {

    const {user} = useContext(UserContext);

    const [location, setLocation] = useState('');

    const [loader, setLoader] = useState(false);

    const [userImageUrl, setUserImage] = useState('');

    const onImageChange = async (event) => {
        const image = event.target.files[0];
        if (image) {
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = async () => {
               if(reader.result) {
                   const imageUrl = await updateUserImage(reader.result);
                   setUserImage(imageUrl);
               } else {
                   console.error('Error converting image to base64')
               }
            };
        }
    }

    const onDataEditSubmit = async (values) => {
        setLoader(true);

        const response = await updateUserData({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            telephoneNumber: values.telephoneNumber
        });

        setTimeout(() => {
            if(response.hasErrors) {
                formik.setErrors({email: response.message});
            } else {
                localStorage.setItem('currentUser', JSON.stringify({
                    id: response._id,
                    loggedInAt: response.date,
                    firstName: response.firstName,
                    lastName: response.lastName,
                    email: response.email,
                    telephoneNumber: response.telephoneNumber
                }));
                window.location.reload();
            }
            setLoader(false);
        }, 300);
    }

    const userDataFields = {
        firstName: Yup.string()
            .required('First name is required.')
            .max(20, "Maximum number of characters is 20.")
            .matches(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u, "First name contains only letters."),
        lastName: Yup.string()
            .required('Last name is required.')
            .max(40, "Maximum number of characters is 40.")
            .matches(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u, "Last name contains only letters."),
        email: Yup.string()
            .email('Incorrect e-mail format.')
            .required('E-mail is required.'),
        telephoneNumber: Yup.string()
            .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                "Wrong telephone number format."
            )
    }

    const userDataSchema = Yup.object().shape(userDataFields);

    const formikInitValues = {
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        telephoneNumber: user.telephoneNumber || ''
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: formikInitValues,
        validationSchema: userDataSchema,
        onSubmit: async (values) => {
            await onDataEditSubmit(values);
        }
    });

    const putUserImage = async () => {
        const imageUrl = await getUserImage();
        setUserImage(imageUrl);
    }

    useEffect(() => {
        putUserImage();
    }, []);

    return (
        <div className="user-profile-right-container">
            {props.activeNavOption === USER_INFO &&
                <UserInfo
                    location={location}
                    setLocation={setLocation}
                    formik={formik}
                    loader={loader}
                    onImageChange={onImageChange}
                    userImageUrl={userImageUrl}
                />}
        </div>
    );
}

export default UserProfileContainer;