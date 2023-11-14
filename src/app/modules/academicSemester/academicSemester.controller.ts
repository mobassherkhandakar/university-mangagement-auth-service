import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { academicSemesterService } from './academicSemester.service'
import pick from '../../../shared/pick'
import { IPaginationOptions } from '../../../interface/pagination'

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body
    const result =
      await academicSemesterService.createSemester(academicSemesterData)
    sendResponse(res, {
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
    const paginationOption: IPaginationOptions = pick(req.query, [
      'page',
      'limit',
      'sortBy',
    ])

    const result =
      await academicSemesterService.getAllSemester(paginationOption)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User get all Successfully done',
      data: result,
    })
    next()
  },
)
export const academicSemesterController = {
  createSemester,
  getAllSemester,
}
