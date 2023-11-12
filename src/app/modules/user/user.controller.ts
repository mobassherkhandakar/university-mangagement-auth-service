import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { userService } from './user.service'

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { users } = req.body
  const result = await userService.createUser(users)
  res.status(200).json({
    success: true,
    massage: 'user created successfully',
    data: result,
  })
})

export const userController = {
  createUser,
}
