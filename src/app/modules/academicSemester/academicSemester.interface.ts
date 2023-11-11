import { Model } from 'mongoose'

export type IAcademicSemesterMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'
export type IAcademicSemesterCode = '01' | '02' | '03'
export type IAcademicSemesterTitle = 'Autumn' | 'Summer' | 'Fall'
export type IAcademicSemester = {
  title: IAcademicSemesterMonth
  year: number
  code: IAcademicSemesterCode
  startMonth: IAcademicSemesterMonth
  endMonth: IAcademicSemesterMonth
}
export type IAcademicSemesterModel = Model<IAcademicSemester>

export type academicSemesterCodeMapper = {
  [key: string]: string
}
