import axios from 'axios';

export async function login(loginData) {
    try {
        const response = await axios.post("users/authentication", loginData);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export async function logout() {
    localStorage.removeItem("currentUser");
    try {
        const response = await axios.post("users/logout");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export async function checkJwtStatus() {
    try {
        const response = await axios.get("users/status");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}