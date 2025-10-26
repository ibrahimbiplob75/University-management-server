import express from 'express';
import { UserControllers } from './user.controller';

import ValidateRequest from '../../Middleware/ValidateRequest';
import { studentValidations } from '../student/student.validation';

const router = express.Router();



router.post('/create-user', ValidateRequest(studentValidations.CreateStudentValidationSchema), UserControllers.createUser);

// router.get('/',ValidateRequest(),UserControllers.getAllUsers);

// router.get('/:userId',ValidateRequest(),UserControllers.getSingleUser);

export const UserRoutes = router;