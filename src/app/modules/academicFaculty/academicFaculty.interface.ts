import { Model } from 'mongoose'

export type IAcademicFaculty = {
  title: string
}
export type UserModel = Model<IAcademicFaculty>
