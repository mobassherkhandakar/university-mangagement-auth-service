import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemster.model'

const createSemester = async (
  payload: IAcademicSemester,
): Promise<IAcademicSemester> => {
  const result = await AcademicSemester.create(payload)
  return result
}
export const academicSemesterService = {
  createSemester,
}
