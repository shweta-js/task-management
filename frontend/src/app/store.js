import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import taskReducer from '../features/tasks/taskSlice';
import employeeReducer from "../features/employees/employeeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    task: taskReducer,
    employee: employeeReducer
  },
});
