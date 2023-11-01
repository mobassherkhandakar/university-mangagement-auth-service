import { Request, Response } from 'express'
import { userService } from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { users } = req.body
    const result = await userService.createUser(users)
    res.status(200).json({
      success: true,
      massage: 'user created successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: true,
      massage: 'User created Failed',
    })
  }
}

export const userController = {
  createUser,
}
