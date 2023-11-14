import { NextFunction, Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { userService } from './user.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { users } = req.body
    const result = await userService.createUser(users)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    })
    next()
  },
)

export const userController = {
  createUser,
}
