import express from 'express';
import { academicSemesterControllers } from './academicSemester.controller';
import { academicSemesterValidation } from './academicSemester.validation';
import ValidateRequest from '../../Middleware/ValidateRequest';

const router = express.Router();

router.post('/create-semester', academicSemesterControllers.createAcademicSemester, ValidateRequest(academicSemesterValidation.CreateacademicSemesterValidation));

router.get('/', academicSemesterControllers.getAllAcademicSemesters, ValidateRequest(academicSemesterValidation.CreateacademicSemesterValidation));

router.patch('/:semesterId', academicSemesterControllers.updateAcademicSemester, ValidateRequest(academicSemesterValidation.updateAcademicSemesterValidationSchema));

router.get('/:semesterId', academicSemesterControllers.getSingleAcademicSemester, ValidateRequest(academicSemesterValidation.CreateacademicSemesterValidation));

// router.delete('/:semesterId', academicSemesterControllers.deleteAcademicSemester);

export const AcademicSemesterRoutes = router;