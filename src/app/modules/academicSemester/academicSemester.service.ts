import ApiError from '../../../errors/ApiError'
import { IPaginationOptions } from '../../../interface/pagination'
import { academicSemesterTitleCodeMapper } from './academicSemester.constants'
import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemster.model'

const createSemester = async (
  payload: IAcademicSemester,
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(400, 'Invalid code')
  }
  const results = await AcademicSemester.create(payload)
  return results
}

const getAllSemester = async (paginationOption: IPaginationOptions) => {
  const { page = 1, limit = 10 } = paginationOption
  const skip = (page - 1) * limit
  const result = await AcademicSemester.find().sort().skip(skip).limit(limit)
  const total = await AcademicSemester.countDocuments()
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}
export const academicSemesterService = {
  createSemester,
  getAllSemester,
}
