import { IAcademicSemester } from '../academicSemester/academicSemester.interface'
import { User } from './user.modal'

const lastStudentId = async (): Promise<string | undefined> => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    { id: 1, _id: 0 },
  )
    .sort({ createdAt: -1 })
    .lean()
  return lastStudent?.id ? lastStudent.id.substring(4) : undefined
}
export const generateStudentId = async (
  academicSemester: IAcademicSemester,
): Promise<string> => {
  const currentId = (await lastStudentId()) || (0).toString().padStart(5, '0')
  let incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  incrementalId = `${academicSemester.year.substring(2)}${
    academicSemester.code
  }${incrementalId}`
  return incrementalId
}
const getLastFacultyId = async (): Promise<string | undefined> => {
  const lastFaculty = await User.findOne(
    {
      role: 'Faculty',
    },
    { id: 1, _id: 0 },
  )
    .sort({ createdAt: -1 })
    .lean()
  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined
}

export const generateFacultyId = async (): Promise<string> => {
  const currentId =
    (await getLastFacultyId()) || (0).toString().padStart(5, '0')
  let incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  incrementalId = `F-${incrementalId}`
  return incrementalId
}
