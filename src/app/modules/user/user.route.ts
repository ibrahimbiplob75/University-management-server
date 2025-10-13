import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/create-user',UserControllers.createUser);

router.get('/',UserControllers.getAllUsers);

router.get('/:userId',UserControllers.getSingleUser);

export const UserRoutes = router;