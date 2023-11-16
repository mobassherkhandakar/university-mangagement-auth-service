import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import router from './app/router'
const app: Application = express()

app.use(cors())

// parsers
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Router
app.use('/api/v1/', router)
// hello how are you
// bainchyud
// hello
//hi

//Not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api is not found',
      },
    ],
  })
  next()
})

//Global Error Handler

app.use(globalErrorHandler)
export default app
