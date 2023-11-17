import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { academicDepartmentService } from './academicDepartment.service'
import sendResponse from '../../../shared/sendResponse'
import { IAcademicDepartment } from './academicDepartment.interface'
import httpStatus from 'http-status'
import pick from '../../../shared/pick'
import { academicDepartmentFilterAbleFields } from './academicDepartment.constants'
import { paginationSortFiled } from '../../../constants/pagination'

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const { ...academicDepartmentData } = req.body
  const result = await academicDepartmentService.createDepartment(
    academicDepartmentData,
  )
  sendResponse<IAcademicDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'create department successfully',
    data: result,
  })
})
const getAllDepartment = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicDepartmentFilterAbleFields)
  const paginationOption = pick(req.query, paginationSortFiled)
  const result = await academicDepartmentService.getAllDepartment(
    filters,
    paginationOption,
  )
  sendResponse<IAcademicDepartment[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get all department',
    meta: result.meta,
    data: result.data,
  })
})
export const academicDepartmentController = {
  createDepartment,
  getAllDepartment,
}
