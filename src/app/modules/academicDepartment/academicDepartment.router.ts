import express from 'express'
import validationRequest from '../../middlewares/validationRequest'
import { academicDepartmentValidation } from './academicDepartment.validation'
import { academicDepartmentController } from './academicDepartment.controller'
const router = express.Router()
router.post(
  '/create-department',
  validationRequest(academicDepartmentValidation.academicDepartmentZodSchema),
  academicDepartmentController.createDepartment,
)
router.get('/', academicDepartmentController.getAllDepartment)
export const academicDepartmentRouter = router
