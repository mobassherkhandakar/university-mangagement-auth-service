class ApiError extends Error {
  statusCode: number
  constructor(statusCode: number, massage: string, stack: string | undefined) {
    super(massage)
    this.statusCode = statusCode
    this.message = massage
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

export default ApiError
