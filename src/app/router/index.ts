import express from 'express'
import { academicSemesterRouter } from '../modules/academicSemester/academicSemester.router'
import { userRouter } from '../modules/user/user.route'
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
]
moduleRoute.forEach(route => router.use(route.path, route.route))

export default router
