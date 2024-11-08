import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
});

const postToken = (tokenData) =>  {
    return {
        headers: {
            Authorization: `Bearer ${tokenData}`,
        },
    }
};

export const getPassword = async () => {
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

export const SignInUser = (userData) => api.post("sign-in/", userData);

export const createUser = (user) => api.post("sign-up/", user);