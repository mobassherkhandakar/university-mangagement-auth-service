'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.academicFacultyController = void 0
const http_status_1 = __importDefault(require('http-status'))
const pagination_1 = require('../../../constants/pagination')
const catchAsync_1 = __importDefault(require('../../../shared/catchAsync'))
const pick_1 = __importDefault(require('../../../shared/pick'))
const sendResponse_1 = __importDefault(require('../../../shared/sendResponse'))
const academicFaculty_constant_1 = require('./academicFaculty.constant')
const academicFaculty_service_1 = require('./academicFaculty.service')
const createFaculty = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const academicFaculty = __rest(req.body, [])
    const result =
      yield academicFaculty_service_1.academicFacultyService.createFaculty(
        academicFaculty,
      )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'create faculty successfully',
      data: result,
    })
  }),
)
const getAllFaculty = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(
      req.query,
      academicFaculty_constant_1.academicFacultyFilterableFields,
    )
    const paginationOption = (0, pick_1.default)(
      req.query,
      pagination_1.paginationSortFiled,
    )
    const result =
      yield academicFaculty_service_1.academicFacultyService.getAllFaculty(
        filters,
        paginationOption,
      )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'get all faculty done',
      meta: result.meta,
      data: result.data,
    })
  }),
)
const getSingleFaculty = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id
    const result =
      yield academicFaculty_service_1.academicFacultyService.getSingleFaculty(
        id,
      )
    ;(0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'get single id done',
      data: result,
    })
  }),
)
exports.academicFacultyController = {
  createFaculty,
  getAllFaculty,
  getSingleFaculty,
}
