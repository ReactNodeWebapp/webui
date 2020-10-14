import axios from 'axios';

export async function updateUserImage(imageData) {
    try {
        const userId = JSON.parse(localStorage.getItem('currentUser')).id;
        const response = await axios.post(`users/${userId}/image`,
            JSON.stringify({data: imageData}),
            {headers: {
                    'Content-type': 'application/json'
                }});
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export async function getUserImage() {
    try {
        const userId = JSON.parse(localStorage.getItem('currentUser')).id;
        const response = await axios.get(`users/${userId}/image`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}