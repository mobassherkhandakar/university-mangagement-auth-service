import express from 'express'
import validationRequest from '../../middlewares/validationRequest'
import { userController } from './user.controller'
import { userValidation } from './user.validataion'
const router = express.Router()

router.post(
  '/create-student',
  validationRequest(userValidation.createUserZodSchema),
  userController.createStudent,
)
export const userRouter = router
