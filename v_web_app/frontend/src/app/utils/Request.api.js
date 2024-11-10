// Request.api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
});

export const postToken = (tokenData) => `Bearer ${tokenData}`;

export const getGeneratePassword = async () => {
    try {
        const response = await api.get("response-password/");
        if (response.data && response.data.output) {
            // console.log(response.data.output);
            return response.data.output;
        }
        else {
            throw new Error("No output returned from the backend");
        }
    } catch (error) {
        console.error("Error fetching Python output:", error);
        throw error;
    }
};

export const postPassword = (passwordData, token) => {

    const headersList = {
        "Accept": "*/*",
        "Authorization": token,
        "Content-Type": "application/json"
    }

    const bodyContent = JSON.stringify(passwordData);

    const reqOptions = {
        url: "save-passwords/",
        method: "POST",
        headers: headersList,
        data: bodyContent,
    }

    const response = api.request(reqOptions);
    return response;
};

export const SignInUser = (userData) => api.post("sign-in/", userData);

export const createUser = (user) => api.post("sign-up/", user);