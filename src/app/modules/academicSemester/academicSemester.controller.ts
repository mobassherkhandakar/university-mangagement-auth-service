import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import { paginationSortFiled } from '../../../constants/pagination'
import { IPaginationOptions } from '../../../interface/pagination'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { IAcademicSemester } from './academicSemester.interface'
import { academicSemesterService } from './academicSemester.service'

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body
    const result =
      await academicSemesterService.createSemester(academicSemesterData)
    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'created semester successfully',
      data: result,
    })
    next()
  },
)

const getAllSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, ['searchTerm', 'title', 'code', 'year'])
    const paginationOption: IPaginationOptions = pick(
      req.query,
      paginationSortFiled,
    )

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
    next()
  },
)
export const academicSemesterController = {
  createSemester,
  getAllSemester,
}
