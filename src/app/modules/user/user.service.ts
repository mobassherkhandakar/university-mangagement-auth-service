import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.modal'
import { generateStudentId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser> => {
  const academicSemester = {
    year: '2025',
    code: '01',
  }
  const id = await generateStudentId(academicSemester)
  user.id = id
  if (!user.password) {
    user.password = config.default_user_password as string
  }
  const result = await User.create(user)
  return result
}

export const userService = {
  createUser,
}
