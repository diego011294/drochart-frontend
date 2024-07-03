// authService.jsx
import axios from 'axios';

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post('https://fearless-playfulness-production.up.railway.app/login', credentials);
        return response;
    } catch (error) {
        throw error;
    }
};
