import express from 'express'
import { academicSemesterController } from './academicSemester.controller'
import validationRequest from '../../middlewares/validationRequest'
import { academicSemesterValidation } from './academicSemester.validation'
const router = express.Router()
router.post(
  '/create-semester',
  validationRequest(academicSemesterValidation.academicSemesterZodSchema),
  academicSemesterController.createSemester,
)
router.get('/', academicSemesterController.getAllSemester)

export const academicSemesterRouter = router
