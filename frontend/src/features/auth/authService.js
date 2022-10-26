import axios from 'axios';

const API_URL = 'http://localhost:8000/api/users/';

const registerUser = async (userData) => {
    const response = await axios.post(API_URL + 'register', userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

const loginUser = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData);

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

const logout = async () => {
    localStorage.removeItem('user');
}
const getEmpCount = async (token) => {
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // }

    const response = await axios.get(API_URL+"/getempcount");

    return response.data;
}
const gethighpriorityTask = async ( token) => {


    const response = await axios.get(API_URL + "/gethighpriority");

    return response.data;
}
const authService = {
    registerUser,
    loginUser,
    logout,
    gethighpriorityTask
}

export default authService;
