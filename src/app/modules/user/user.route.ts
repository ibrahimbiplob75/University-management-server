import express from 'express';
import { UserControllers } from './user.controller';
import { StudentValidationSchema } from '../student/student.validation';
import ValidateRequest from '../../Middleware/ValidateRequest';

const router = express.Router();



router.post('/create-user',ValidateRequest(StudentValidationSchema),UserControllers.createUser);

// router.get('/',ValidateRequest(),UserControllers.getAllUsers);

// router.get('/:userId',ValidateRequest(),UserControllers.getSingleUser);

export const UserRoutes = router;