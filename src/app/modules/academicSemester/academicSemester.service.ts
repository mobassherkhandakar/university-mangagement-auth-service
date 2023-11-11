import ApiError from '../../../errors/ApiError'
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
export const academicSemesterService = {
  createSemester,
}
