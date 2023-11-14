import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger } from './shared/logger'

process.on('uncaughtException', error => {
  logger.error(error)
  process.exit(1)
})

let server: Server
process.on('uncaughtException', () => {})
async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('🛢️ database connection is started')
    server = app.listen(config.port, () => {
      logger.info(`university-management app listening on port ${config.port}`)
    })
  } catch (error) {
    logger.error('🛢️database connection error', error)
  }
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        logger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}
main()
process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
