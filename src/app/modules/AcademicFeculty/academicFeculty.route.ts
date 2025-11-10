import express from 'express';
import validateRequest from '../../Middleware/ValidateRequest';
import { AcademicFecultyController } from './academicFeculty.controller';
import { CreateAcademicFecultyValidation } from './academicFeculty.Validation';


const router = express.Router();

router.post('/create-academic-faculty', validateRequest(CreateAcademicFecultyValidation), AcademicFecultyController.createAcademicFeculty);

router.get('/', AcademicFecultyController.getAllAcademicFeculties);

router.patch('/:id', AcademicFecultyController.updateAcademicFecultyById);

router.get('/:id', AcademicFecultyController.getAcademicFecultyByIdFromDB);

router.delete('/:id', AcademicFecultyController.deleteAcademicFecultyById);

export const AcademicFecultyRoutes = router;