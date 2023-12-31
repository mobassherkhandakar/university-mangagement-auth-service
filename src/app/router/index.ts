import express from 'express'
import { academicDepartmentRouter } from '../modules/academicDepartment/academicDepartment.router'
import { academicFacultyRouter } from '../modules/academicFaculty/academicFaculty.router'
import { academicSemesterRouter } from '../modules/academicSemester/academicSemester.router'
import { userRouter } from '../modules/user/user.route'
import { studentRouter } from '../modules/student/student.router'
const router = express.Router()

const moduleRoute = [
  {
    path: '/user',
    route: userRouter,
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRouter,
  },
  {
    path: '/academic-faculty',
    route: academicFacultyRouter,
  },
  {
    path: '/academic-department',
    route: academicDepartmentRouter,
  },
  {
    path: '/student',
    route: studentRouter,
  },
]
moduleRoute.forEach(route => router.use(route.path, route.route))

export default router
