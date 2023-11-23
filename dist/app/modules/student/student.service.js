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
Object.defineProperty(exports, '__esModule', { value: true })
exports.studentService = void 0
const paginationHelper_1 = require('../../../helpers/paginationHelper')
const student_constants_1 = require('./student.constants')
const student_model_1 = require('./student.model')
const getAllStudent = (filters, paginationOption) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, skip, sortBy, sortOrder } =
      paginationHelper_1.paginationHelper.calculatePagination(paginationOption)
    const { searchTerm } = filters,
      filterData = __rest(filters, ['searchTerm'])
    const andCondition = []
    if (searchTerm) {
      andCondition.push({
        $or: student_constants_1.studentSearchableFields.map(field => ({
          [field]: {
            $regex: searchTerm,
            $options: 'i',
          },
        })),
      })
    }
    if (Object.keys(filterData).length) {
      andCondition.push({
        $and: Object.entries(filterData).map(([kay, value]) => ({
          [kay]: value,
        })),
      })
    }
    const whereCondition = andCondition.length > 0 ? { $and: andCondition } : {}
    const sortCondition = {}
    if (sortBy && sortOrder) {
      sortCondition[sortBy] = sortOrder
    }
    const result = yield student_model_1.Student.find(whereCondition)
      .populate('academicFaculty')
      .populate('academicDepartment')
      .populate('academicSemester')
      .sort(sortCondition)
      .skip(skip)
      .limit(limit)
    const total = yield student_model_1.Student.countDocuments()
    return {
      meta: {
        page,
        limit,
        total,
      },
      data: result,
    }
  })
exports.studentService = {
  getAllStudent,
}
