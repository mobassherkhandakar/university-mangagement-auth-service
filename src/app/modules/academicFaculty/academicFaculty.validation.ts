import { z } from 'zod'

const academicFacultyZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
  }),
})

export const academicFacultyValidation = {
  academicFacultyZodSchema,
}
