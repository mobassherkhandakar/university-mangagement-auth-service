import { SortOrder } from 'mongoose'
import { paginationHelper } from '../../../helpers/paginationHelper'
import { IGenericResponse } from '../../../interface/common'
import { IPaginationOptions } from '../../../interface/pagination'
import { academicFacultySearchableFields } from './academicFaculty.constant'
import {
  IAcademicFaculty,
  IAcademicFacultyFilters,
} from './academicFaculty.interface'
import { AcademicFaculty } from './academicFaculty.model'

const createFaculty = async (
  payload: IAcademicFaculty,
): Promise<IAcademicFaculty> => {
  const result = await AcademicFaculty.create(payload)
  return result
}

const getAllFaculty = async (
  filters: IAcademicFacultyFilters,
  paginationOption: IPaginationOptions,
): Promise<IGenericResponse<IAcademicFaculty[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(paginationOption)
  const { searchTerm, ...filterData } = filters
  const andCondition = []
  if (searchTerm) {
    andCondition.push({
      $or: academicFacultySearchableFields.map(field => ({
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
  const whereCondition = andCondition.length > 0 ? { $and: andCondition } : {}
  const sortCondition: { [kay: string]: SortOrder } = {}
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder
  }
  const result = await AcademicFaculty.find(whereCondition)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit)
  const total = await AcademicFaculty.countDocuments()
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}
const getSingleFaculty = async (
  id: string,
): Promise<IAcademicFaculty | null> => {
  console.log(id)
  const result = await AcademicFaculty.findById(id)
  return result
}
export const academicFacultyService = {
  createFaculty,
  getAllFaculty,
  getSingleFaculty,
}
