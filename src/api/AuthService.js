import axios from 'axios';

export async function login(loginData) {
    try {
        const response = await axios.post("users/authentication", loginData);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export function logout() {
    localStorage.removeItem("currentUser");
}
