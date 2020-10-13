import axios from 'axios';

export async function updateUserData(updateData) {
    try {
        const userId = JSON.parse(localStorage.getItem('currentUser')).id;
        const response = await axios.put(`users/${userId}`, updateData);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}