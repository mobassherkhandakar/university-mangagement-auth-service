'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.academicFacultyRouter = void 0
const express_1 = __importDefault(require('express'))
const validationRequest_1 = __importDefault(
  require('../../middlewares/validationRequest'),
)
const academicFaculty_validation_1 = require('./academicFaculty.validation')
const academicFaculty_controller_1 = require('./academicFaculty.controller')
const router = express_1.default.Router()
router.post(
  '/create-faculty',
  (0, validationRequest_1.default)(
    academicFaculty_validation_1.academicFacultyValidation
      .academicFacultyZodSchema,
  ),
  academicFaculty_controller_1.academicFacultyController.createFaculty,
)
router.get(
  '/',
  academicFaculty_controller_1.academicFacultyController.getAllFaculty,
)
router.get(
  '/:id',
  academicFaculty_controller_1.academicFacultyController.getSingleFaculty,
)
exports.academicFacultyRouter = router
