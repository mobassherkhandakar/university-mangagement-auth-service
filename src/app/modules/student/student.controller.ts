import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { IStudent } from './student.interface'
import httpStatus from 'http-status'
import { studentService } from './student.service'
import pick from '../../../shared/pick'
import { studentFilterableFields } from './student.constants'
import { paginationSortFiled } from '../../../constants/pagination'

const getAllStudent = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, studentFilterableFields)
  const paginationOption = pick(req.query, paginationSortFiled)
  const result = await studentService.getAllStudent(filters, paginationOption)
  sendResponse<IStudent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get All student done',
    meta: result.meta,
    data: result.data,
  })
})

export const studentController = {
  getAllStudent,
}
