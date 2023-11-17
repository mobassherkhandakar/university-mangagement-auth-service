import express from 'express'
import validationRequest from '../../middlewares/validationRequest'
import { academicSemesterController } from './academicSemester.controller'
import { academicSemesterValidation } from './academicSemester.validation'
const router = express.Router()
router.post(
  '/create-semester',
  validationRequest(academicSemesterValidation.academicSemesterZodSchema),
  academicSemesterController.createSemester,
)
router.get('/:id', academicSemesterController.getSingleSemester)
router.get('/', academicSemesterController.getAllSemester)

export const academicSemesterRouter = router
