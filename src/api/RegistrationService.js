import axios from 'axios';

export async function register(registrationData) {
    try {
        const response = await axios.post("users/registration", registrationData);
        return response.data;
    } catch (error) {
        console.error(error.response);
        return error.response.data;
    }
}
