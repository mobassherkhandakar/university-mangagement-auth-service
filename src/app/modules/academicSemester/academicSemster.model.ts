import { Schema, model } from 'mongoose'
import ApiError from '../../../errors/ApiError'
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitle,
} from './academicSemester.constants'
import { IAcademicSemester } from './academicSemester.interface'
import httpStatus from 'http-status'

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitle,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
  },
  {
    timestamps: true,
  },
)

academicSemesterSchema.pre('save', async function (next) {
  const exIst = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  })
  if (exIst) {
    throw new ApiError(httpStatus.CONFLICT, 'This year is already exist')
  }
  next()
})
export const AcademicSemester = model<IAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
)
