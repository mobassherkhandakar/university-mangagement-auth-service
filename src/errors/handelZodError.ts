import { ZodError } from 'zod'
import { IGenericErrorResponse } from '../app/interface/common'
import { IGenericErrorMessage } from '../app/interface/error'

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map(issus => {
    return {
      path: issus?.path[issus.path.length - 1],
      message: issus?.message,
    }
  })
  const statusCode = 400
  return {
    statusCode,
    message: 'Zod Validation Error',
    errorMessages: errors,
  }
}

export default handleZodError
