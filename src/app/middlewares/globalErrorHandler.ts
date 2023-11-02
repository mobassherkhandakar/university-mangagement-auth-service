/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express'

const globalErrorHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(400).json({ error: error })
  next()
}

export default globalErrorHandler
