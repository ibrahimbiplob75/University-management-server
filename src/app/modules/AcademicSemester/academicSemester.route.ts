import express from 'express';
import { academicSemesterControllers } from './academicSemester.controller';
import { academicSemesterValidation } from './academicSemester.validation';
import ValidateRequest from '../../Middleware/ValidateRequest';

const router = express.Router();

router.post('/create-semester', academicSemesterControllers.CreateSemesters, ValidateRequest(academicSemesterValidation.CreateacademicSemesterValidation));

router.get('/', academicSemesterControllers.getAllSemesters, ValidateRequest(academicSemesterValidation.CreateacademicSemesterValidation));

router.patch('/:semesterId', academicSemesterControllers.updateSemester, ValidateRequest(academicSemesterValidation.updateAcademicSemesterValidationSchema));

router.get('/:semesterId', academicSemesterControllers.getSingleSemester, ValidateRequest(academicSemesterValidation.CreateacademicSemesterValidation));

router.delete('/:semesterId', academicSemesterControllers.deleteSemester);

export const AcademicSemesterRoutes = router;