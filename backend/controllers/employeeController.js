import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import Employee from "../models/employeeModel.js";

// @desc  Get user tasks
// @route  GET /api/tasks
// @access  Private
const getEmployees = expressAsyncHandler(async (req, res, next) => {
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    const Employees = await Employee.find({ user: req.user.id });


    res.status(200).json(Employees);
})

// @desc  Get user Employee
// @route  GET /api/Employees/:id
// @access  Private
const getEmployee = expressAsyncHandler(async (req, res, next) => {
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    const Employee = await Employee.findById(req.params.id);

    if (!Employee) {
        res.status(404);
        throw new Error('Employee not found');
    }

    if (Employee.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('Not authorized');
    }

    res.status(200).json(Employee);
})

// @desc  Create Employee
// @route  POST /api/Employees
// @access  Private
const createEmployee = expressAsyncHandler(async (req, res, next) => {
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    const { employeeName } = req.body;

    if (!employeeName) {
        res.status(400);
        throw new Error('Please add employee name');
    }

    const employee = await Employee.create({
       employeeName
    })

    res.status(201).json(employee);
})




// @desc  Update Employee
// @route  PUT /api/Employees/:id
// @access  Private
const updateEmployee = expressAsyncHandler(async (req, res, next) => {
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    const Employee = await Employee.findById(req.params.id);

    if (!Employee) {
        res.status(404);
        throw new Error('Employee not found');
    }

    if (Employee.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('Not authorized');
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedEmployee);
})

// @desc  Delete Employee
// @route  DELETE /api/Employees/:id
// @access  Private
const deleteEmployee = expressAsyncHandler(async (req, res, next) => {
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    const Employee = await Employee.findById(req.params.id);

    if (!Employee) {
        res.status(404);
        throw new Error('Employee not found');
    }

    if (Employee.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('Not authorized');
    }

    await Employee.remove();

    res.status(200).json({ message: 'Employee deleted' });
})

// @desc  Delete Employees
// @route  DELETE /api/Employees
// @access  Private
const deleteEmployees = expressAsyncHandler(async (req, res, next) => {
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    const Employees = await Employee.find({ user: req.user.id });
    console.log(Employees);

    if (!Employees) {
        res.status(404);
        throw new Error('There is no Employees for that user');
    }

    Employees.forEach(Employee => {
        Employee.remove()
    });

    res.status(200).json({ success: true });
})

export { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee, deleteEmployees }
