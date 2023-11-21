import config from '../../../config'
import { AcademicSemester } from '../academicSemester/academicSemster.model'
import { IStudent } from '../student/student.interface'
import { IUser } from './user.interface'
import { User } from './user.modal'
import { generateStudentId } from './user.utils'

const createStudent = async (
  student: IStudent,
  user: IUser,
): Promise<IUser> => {
  const academicSemester = await AcademicSemester.findById(
    student.academicSemester,
  )
  //set user role
  user.role = 'student'

  //sed id

  const id = await generateStudentId(academicSemester)
  user.id = id

  if (!user.password) {
    user.password = config.default_user_password as string
  }
  const result = await User.create(user)
  return result
}

export const userService = {
  createStudent,
}
