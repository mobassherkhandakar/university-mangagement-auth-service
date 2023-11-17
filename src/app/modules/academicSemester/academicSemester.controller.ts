import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { paginationSortFiled } from '../../../constants/pagination'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { academicSemesterFilterAbleFields } from './academicSemester.constants'
import { IAcademicSemester } from './academicSemester.interface'
import { academicSemesterService } from './academicSemester.service'

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body
  const result =
    await academicSemesterService.createSemester(academicSemesterData)
  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'created semester successfully',
    data: result,
  })
})

const getAllSemester = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicSemesterFilterAbleFields)
  const paginationOption = pick(req.query, paginationSortFiled)

  const result = await academicSemesterService.getAllSemester(
    filters,
    paginationOption,
  )
  sendResponse<IAcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User get all Successfully done',
    meta: result.meta,
    data: result.data,
  })
})

const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params?.id
  const result = await academicSemesterService.getSingleSemester(id)
  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single semester get successfully',
    data: result,
  })
})
export const academicSemesterController = {
  createSemester,
  getAllSemester,
  getSingleSemester,
}
