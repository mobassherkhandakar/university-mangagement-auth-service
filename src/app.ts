import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { userRouter } from './app/modules/user/user.route'
import { academicSemesterRouter } from './app/modules/academicSemester/academicSemester.router'
const app: Application = express()

app.use(cors())

// parsers
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Router
app.use('/api/v1/user', userRouter)
app.use('/api/v1/academic-semesters', academicSemesterRouter)

// app.get('/', (req: Request, res: Response) => {
// Promise.reject(new Error('ore baba error'))
// res.send('Working successfully')
// })

//Global Error Handler

app.use(globalErrorHandler)
export default app
