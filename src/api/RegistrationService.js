import axios from 'axios';

export async function register(registrationData) {
    try {
        const response = await axios.post("users/registration", registrationData);
        return response;
    } catch (error) {
        console.error(error);
        return error.response.data;
    }
}
