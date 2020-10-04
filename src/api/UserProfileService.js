import axios from 'axios';

export async function getUserProfile(user) {
    try {
        const response = await axios.post("users/profile", user);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}