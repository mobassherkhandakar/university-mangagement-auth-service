import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { userRouter } from './app/modules/user/user.route'
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

export default app
