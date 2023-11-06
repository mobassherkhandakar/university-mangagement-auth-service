import express from 'express'
import validationRequest from '../../middlewares/validationRequest'
import { userController } from './user.controller'
import { userValidation } from './user.validataion'
const router = express.Router()

router.post(
  '/create-user',
  validationRequest(userValidation.createUserZodSchema),
  userController.createUser,
)
export const userRouter = router
