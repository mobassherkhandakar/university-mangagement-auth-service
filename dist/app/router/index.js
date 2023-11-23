'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const academicDepartment_router_1 = require('../modules/academicDepartment/academicDepartment.router')
const academicFaculty_router_1 = require('../modules/academicFaculty/academicFaculty.router')
const academicSemester_router_1 = require('../modules/academicSemester/academicSemester.router')
const user_route_1 = require('../modules/user/user.route')
const student_router_1 = require('../modules/student/student.router')
const router = express_1.default.Router()
const moduleRoute = [
  {
    path: '/user',
    route: user_route_1.userRouter,
  },
  {
    path: '/academic-semesters',
    route: academicSemester_router_1.academicSemesterRouter,
  },
  {
    path: '/academic-faculty',
    route: academicFaculty_router_1.academicFacultyRouter,
  },
  {
    path: '/academic-department',
    route: academicDepartment_router_1.academicDepartmentRouter,
  },
  {
    path: '/student',
    route: student_router_1.studentRouter,
  },
]
moduleRoute.forEach(route => router.use(route.path, route.route))
exports.default = router
