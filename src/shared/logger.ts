// /* eslint-disable no-undef */
// import path from 'path'
// import { createLogger, format, transports } from 'winston'
// import DailyRotateFile from 'winston-daily-rotate-file'
// const { combine, timestamp, label, printf } = format

// //Customm Log Format

// const myFormat = printf(({ level, message, label, timestamp }) => {
//   const date = new Date(timestamp)
//   const hour = date.getHours()
//   const minutes = date.getMinutes()
//   const seconds = date.getSeconds()
//   return `${date.toDateString()} ${hour}:${minutes}:${seconds} } [${label}] ${level}: ${message}`
// })

// const logger = createLogger({
//   level: 'info',
//   format: combine(label({ label: 'PH' }), timestamp(), myFormat),
//   transports: [
//     new transports.Console(),
//     new DailyRotateFile({
//       filename: path.join(
//         process.cwd(),
//         'logs',
//         'winston',
//         'successes',
//         'phu-%DATE%-success.log',
//       ),
//       datePattern: 'YYYY-DD-MM-HH',
//       zippedArchive: true,
//       maxSize: '20m',
//       maxFiles: '14d',
//     }),
//   ],
// })

// const errorLogger = createLogger({
//   level: 'error',
//   format: combine(label({ label: 'PH' }), timestamp(), myFormat),
//   transports: [
//     new transports.Console(),
//     new DailyRotateFile({
//       filename: path.join(
//         process.cwd(),
//         'logs',
//         'winston',
//         'errors',
//         'phu-%DATE%-error.log',
//       ),
//       datePattern: 'YYYY-DD-MM-HH',
//       zippedArchive: true,
//       maxSize: '20m',
//       maxFiles: '14d',
//     }),
//   ],
// })

// export { logger, errorLogger }

//!New logger versions
import winston from 'winston'
import 'winston-mongodb'

const MongoTransport = new winston.transports.MongoDB({
  db: process.env['DATABASE_URL'] as string,
  collection: 'logs',
  options: { useUnifiedTopology: true },
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
})

const ConsoleTransport = new winston.transports.Console({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple(),
  ),
})

export const logger = winston.createLogger({
  transports: [ConsoleTransport, MongoTransport],
})

// if (process.env.NODE_ENV !== 'production') {
//   logger.remove(MongoTransport);
// }
