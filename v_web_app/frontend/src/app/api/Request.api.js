import axios from 'axios';

const passwordAPI = axios.create({
	baseURL: "http://localhost:8000",
})

export const getPassword = async () => {
    try {
        const response = await passwordAPI.get("/api/response-password/");
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
