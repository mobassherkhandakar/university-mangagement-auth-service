import { SortOrder } from 'mongoose'

type IOption = {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: SortOrder
}

type IOptionResponse = {
  page: number
  limit: number
  skip: number
  sortBy: string
  sortOrder: SortOrder
}
const calculatePagination = (options: IOption): IOptionResponse => {
  const page = Number(options.page)
  const limit = Number(options.limit)
  const skip = (page - 1) * limit
  const sortBy = options.sortBy || 'createdAd'
  const sortOrder = options.sortOrder || 'desc'
  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder,
  }
}

export const paginationHelper = {
  calculatePagination,
}
