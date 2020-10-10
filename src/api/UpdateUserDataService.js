import axios from 'axios';

export async function register(updateData) {
    try {
        const userId = localStorage.getItem('currentUser').id;
        const response = await axios.put(`users/${userId}`, updateData);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}