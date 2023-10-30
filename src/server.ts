import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('🛢️ database connection is started')
    app.listen(config.port, () => {
      console.log(`university-management app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('🛢️database connection error', error)
  }
}

main()
