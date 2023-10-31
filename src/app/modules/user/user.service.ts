import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.modal'
import { generateUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser> => {
  const id = await generateUserId()
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
