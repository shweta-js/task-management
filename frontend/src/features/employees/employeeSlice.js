import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import employeeService from './employeeService';

const initialState = {
    employees: [],
    employee: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

export const createEmployee = createAsyncThunk('employee/create', async (employeeData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await employeeService.createEmployee(employeeData, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const getEmployees = createAsyncThunk('employee/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await employeeService.getEmployees(token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const deleteEmployee = createAsyncThunk('employee/delete', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await employeeService.deleteEmployee(id, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const getEmployee = createAsyncThunk('employee/getOne', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await employeeService.getEmployee(id, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const deleteEmployees = createAsyncThunk('employee/deleteAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await employeeService.deleteEmployees(token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createEmployee.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createEmployee.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(createEmployee.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getEmployees.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getEmployees.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.employees = action.payload
            })
            .addCase(getEmployees.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getEmployee.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getEmployee.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.employee = action.payload
            })
            .addCase(getEmployee.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})


export const { reset } = employeeSlice.actions;
export default employeeSlice.reducer;
