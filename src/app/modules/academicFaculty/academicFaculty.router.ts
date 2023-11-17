import express from 'express'
import validationRequest from '../../middlewares/validationRequest'
import { academicFacultyValidation } from './academicFaculty.validation'
import { academicFacultyController } from './academicFaculty.controller'
const router = express.Router()
router.post(
  '/create-faculty',
  validationRequest(academicFacultyValidation.academicFacultyZodSchema),
  academicFacultyController.createFaculty,
)
router.get('/', academicFacultyController.getAllFaculty)
router.get('/:id', academicFacultyController.getSingleFaculty)
export const academicFacultyRouter = router
