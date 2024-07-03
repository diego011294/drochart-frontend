// authService.jsx
import axios from 'axios';

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post('http://roundhouse.proxy.rlwy.net:47292/login', credentials);
        return response;
    } catch (error) {
        throw error;
    }
};
