import status from 'http-status'
import { Schema, model } from 'mongoose'
import ApiError from '../../../errors/ApiError'
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitle,
} from './academicSemester.constants'
import { IAcademicSemester } from './academicSemester.interface'

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

academicSemesterSchema.pre('save', async function () {
  const exist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  })
  if (exist) {
    throw new ApiError(status.CONFLICT, 'This year is already exist')
  }
})
export const AcademicSemester = model<IAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
)
