import express from "express";
import { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee, deleteEmployees } from '../controllers/employeeController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, getEmployees).post(protect, createEmployee).delete(protect, deleteEmployees);
router.route('/:id').get(protect, getEmployee).put(protect, updateEmployee).delete(protect, deleteEmployee);

export default router;
