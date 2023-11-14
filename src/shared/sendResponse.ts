import { Response } from 'express'

type IResponse<T> = {
  statusCode: number
  success: boolean
  message: string | null
  data: T | null
}

const sendResponse = <T>(res: Response, data: IResponse<T>): void => {
  const response: IResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    data: data.data || null,
  }
  res.status(data.statusCode).json(response)
}
export default sendResponse
