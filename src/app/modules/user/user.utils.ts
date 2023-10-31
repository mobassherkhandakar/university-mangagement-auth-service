import { User } from './user.modal'

const lastUserId = async () => {
  const lastId = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastId?.id
}
console.log(lastUserId())
export const generateUserId = async () => {
  const currentId = (await lastUserId()) || (0).toString().padStart(5, '0')
  const incrementalId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementalId
}
