'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.userRouter = void 0
const express_1 = __importDefault(require('express'))
const validationRequest_1 = __importDefault(
  require('../../middlewares/validationRequest'),
)
const user_controller_1 = require('./user.controller')
const user_validataion_1 = require('./user.validataion')
const router = express_1.default.Router()
router.post(
  '/create-student',
  (0, validationRequest_1.default)(
    user_validataion_1.userValidation.createUserZodSchema,
  ),
  user_controller_1.userController.createStudent,
)
exports.userRouter = router
