import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { academicSemesterService } from './academicSemester.service'

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body
  const result =
    await academicSemesterService.createSemester(academicSemesterData)
  res.status(200).json({
    success: true,
    message: 'create Semester successfully',
    data: result,
  })
})
export const academicSemesterController = {
  createSemester,
}
