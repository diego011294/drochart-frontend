import axios from "axios"

const BASE_URL = 'https://fearless-playfulness-production.up.railway.app/users';

const config = () => {
    return {
        headers: {
            "Authorization": sessionStorage.getItem("token"),
            "content-Type": "application/json"
        }
    }
}

export const findAll = async() => {
    try {
        const response = await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const save = async ({ username, email, password }) => {
    try {
        return await axios.post(BASE_URL, {
            username,
            email,
            password,
        }, config());
    } catch (error) {
        throw error;
    }
}

export const update = async({ id, username, email}) => {
    try {
        return await axios.put(`${BASE_URL}/${id}`, {
            username,
            email,
            password: 'nothing',
        }, config());
    } catch (error) {
        throw error;
    }
}

export const remove = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`, {
            headers: {
                "Authorization": sessionStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}