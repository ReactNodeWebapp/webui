import axios from 'axios';

export async function register(registrationData) {
    try {
        const response = await axios.post("users/registration", registrationData);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}
