import express from 'express'
import { userRouter } from '../app/modules/user/user.route'
import { academicSemesterRouter } from '../app/modules/academicSemester/academicSemester.router'
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
