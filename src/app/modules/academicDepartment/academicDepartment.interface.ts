import { Model, Types } from 'mongoose'
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface'

export type IAcademicDepartment = {
  title: string
  academicFaculty: Types.ObjectId | IAcademicFaculty
}

export type IAcademicDepartMentModel = Model<
  IAcademicDepartment,
  Record<string, unknown>
>
export type IAcademicDepartmentFilters = {
  searchTerm?: string
}
