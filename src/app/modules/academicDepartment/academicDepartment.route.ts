import express from 'express';
import validateRequest from '../../Middleware/ValidateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { createAcademicDepartmentZodSchema, updateAcademicDepartmentZodSchema } from './academicDepartment.validation';



const router = express.Router();

router.post('/create-academic-department', validateRequest(createAcademicDepartmentZodSchema), AcademicDepartmentController.createAcademicDepartment);

router.get('/', AcademicDepartmentController.getAllAcademicDepartments);

router.patch(
  '/:departmentId',
  validateRequest(
    updateAcademicDepartmentZodSchema,
  ),
    AcademicDepartmentController.updateAcademicDepartment,
);

router.get('/:id', AcademicDepartmentController.getAcademicDepartmentById);

router.delete('/:id', AcademicDepartmentController.deleteAcademicDepartment);

export const AcademicDepartmentRoutes = router;