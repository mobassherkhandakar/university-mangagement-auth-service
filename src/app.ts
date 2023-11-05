import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { userRouter } from './app/modules/user/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())

// parsers
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Router

app.get('/', async (req: Request, res: Response) => {
  res.send('Working successfully')
})
app.use('/api/v1/user', userRouter)

//Global Error Handler
app.use(globalErrorHandler)

export default app
