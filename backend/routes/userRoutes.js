import express from "express";
import { registerUser, loginUser } from '../controllers/userController.js';
import { getTotalEmployeeCount,gethighpriorityTask  } from "../controllers/userController.js";
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getempcount',getTotalEmployeeCount);
router.get('/highpriority',gethighpriorityTask )
export default router;
