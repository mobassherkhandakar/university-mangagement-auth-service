import { NextFunction, Request, Response } from 'express'
import { userService } from './user.service'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { users } = req.body
    const result = await userService.createUser(users)
    res.status(200).json({
      success: true,
      massage: 'user created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const userController = {
  createUser,
}
