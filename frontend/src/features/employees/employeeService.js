import axios from 'axios';

const API_URL = 'http://localhost:8000/api/employees/';

const createEmployee = async (employeeData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, employeeData, config);

    return response.data;
}

const getEmployees = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config);

    return response.data;
}

const deleteEmployee = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + id, config);

    return response.data;
}

const getEmployee = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + id, config);

    return response.data;
}

const deleteEmployees = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL, config);

    return response.data;
}

const employeeService = {
    createEmployee,
    getEmployees,
    deleteEmployee,
    getEmployee,
    deleteEmployees
}

export default employeeService;
