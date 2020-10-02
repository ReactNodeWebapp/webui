import axios from 'axios';

export async function login(loginData) {
    try {
        const response = await axios.post("users/authentication", loginData);
        if (response.data.user.token) {
            localStorage.setItem("token", JSON.stringify(response.data.user.token));
        }
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export function logout() {
    localStorage.removeItem("token");
}
