import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { paginationSortFiled } from '../../../constants/pagination'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { academicFacultyFilterableFields } from './academicFaculty.constant'
import { IAcademicFaculty } from './academicFaculty.interface'
import { academicFacultyService } from './academicFaculty.service'

const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const { ...academicFaculty } = req.body
  const result = await academicFacultyService.createFaculty(academicFaculty)
  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'create faculty successfully',
    data: result,
  })
})
const getAllFaculty = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicFacultyFilterableFields)
  const paginationOption = pick(req.query, paginationSortFiled)
  const result = await academicFacultyService.getAllFaculty(
    filters,
    paginationOption,
  )
  sendResponse<IAcademicFaculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get all faculty done',
    meta: result.meta,
    data: result.data,
  })
})
const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await academicFacultyService.getSingleFaculty(id)
  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'get single id done',
    data: result,
  })
})

export const academicFacultyController = {
  createFaculty,
  getAllFaculty,
  getSingleFaculty,
}
