'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.academicSemesterValidation = void 0
const zod_1 = require('zod')
const academicSemester_constants_1 = require('./academicSemester.constants')
const academicSemesterZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    title: zod_1.z.enum(
      [...academicSemester_constants_1.academicSemesterTitle],
      {
        required_error: 'title is required',
      },
    ),
    year: zod_1.z.number({
      required_error: 'year is required',
    }),
    code: zod_1.z.enum([...academicSemester_constants_1.academicSemesterCode], {
      required_error: 'code is required',
    }),
    startMonth: zod_1.z.enum(
      [...academicSemester_constants_1.academicSemesterMonth],
      {
        required_error: 'startMonth is required',
      },
    ),
    endMonth: zod_1.z.enum(
      [...academicSemester_constants_1.academicSemesterMonth],
      {
        required_error: 'endMonth is required',
      },
    ),
  }),
})
exports.academicSemesterValidation = {
  academicSemesterZodSchema,
}
