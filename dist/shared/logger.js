'use strict'
// /* eslint-disable no-undef */
// import path from 'path'
// import { createLogger, format, transports } from 'winston'
// import DailyRotateFile from 'winston-daily-rotate-file'
// const { combine, timestamp, label, printf } = format
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.logger = void 0
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
const winston_1 = __importDefault(require('winston'))
require('winston-mongodb')
const MongoTransport = new winston_1.default.transports.MongoDB({
  db: process.env['DATABASE_URL'],
  collection: 'logs',
  options: { useUnifiedTopology: true },
  format: winston_1.default.format.combine(
    winston_1.default.format.timestamp(),
    winston_1.default.format.json(),
  ),
})
const ConsoleTransport = new winston_1.default.transports.Console({
  format: winston_1.default.format.combine(
    winston_1.default.format.colorize(),
    winston_1.default.format.simple(),
  ),
})
exports.logger = winston_1.default.createLogger({
  transports: [ConsoleTransport, MongoTransport],
})
// if (process.env.NODE_ENV !== 'production') {
//   logger.remove(MongoTransport);
// }
