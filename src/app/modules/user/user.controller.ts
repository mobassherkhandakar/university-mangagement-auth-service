import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { IUser } from './user.interface'
import { userService } from './user.service'

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...users } = req.body
  const result = await userService.createUser(users)
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  })
})

export const userController = {
  createUser,
}
