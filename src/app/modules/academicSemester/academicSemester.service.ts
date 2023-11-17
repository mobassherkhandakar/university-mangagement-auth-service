import { SortOrder } from 'mongoose'
import ApiError from '../../../errors/ApiError'
import { paginationHelper } from '../../../helpers/paginationHelper'
import { IGenericResponse } from '../../../interface/common'
import { IPaginationOptions } from '../../../interface/pagination'
import {
  academicSemesterSearchAbleField,
  academicSemesterTitleCodeMapper,
} from './academicSemester.constants'
import {
  IAcademicDepartmentFilters,
  IAcademicSemester,
} from './academicSemester.interface'
import { AcademicSemester } from './academicSemster.model'

const createSemester = async (
  payload: IAcademicSemester,
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(400, 'Invalid code')
  }
  const results = await AcademicSemester.create(payload)
  return results
}

const getAllSemester = async (
  filters: IAcademicDepartmentFilters,
  paginationOption: IPaginationOptions,
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const { skip, page, limit, sortBy, sortOrder } =
    paginationHelper.calculatePagination(paginationOption)
  const { searchTerm, ...filterData } = filters

  const andCondition = []

  if (searchTerm) {
    andCondition.push({
      $or: academicSemesterSearchAbleField.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }
  if (Object.keys(filterData).length) {
    andCondition.push({
      $and: Object.entries(filterData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }
  // const andCondition = [
  //   {
  //     $or: [
  //       {
  //         title: {
  //           $regex: searchTerm,
  //           $options: 'i',
  //         },
  //       },
  //     ],
  //   },
  // ]
  const whereCondition = andCondition.length > 0 ? { $and: andCondition } : {}

  const sortCondition: { [key: string]: SortOrder } = {}
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder
  }
  const result = await AcademicSemester.find(whereCondition)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit)
  const total = await AcademicSemester.countDocuments()
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}
const getSingleSemester = async (id: string) => {
  const result = await AcademicSemester.findById(id)
  return result
}
export const academicSemesterService = {
  createSemester,
  getAllSemester,
  getSingleSemester,
}
