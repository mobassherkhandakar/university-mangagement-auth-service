/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import config from '../../config'
import { IGenericErrorMessage } from '../interface/error'

const globalErrorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = 500
  let message = 'something went wrong !'
  let errorMessage: IGenericErrorMessage[] = []

  if (error.name == 'ValidationError') {
    // const simplifiedError = handleValidationError(error)
  }

  res.status(statusCode).json({
    success: true,
    message,
    errorMessage,
    stack: config.env !== 'production' ? error.stack : undefined,
  })
  next()
}

export default globalErrorHandler
