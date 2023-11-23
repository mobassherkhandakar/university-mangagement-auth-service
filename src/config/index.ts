/* eslint-disable no-undef */
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_student_password: process.env.DEFAULT_USER_PASSWORD,
  env: process.env.NODE_ENV,
  default_admin_password: process.env.DEFAULT_ADMIN_PASSWORD,
  default_faculty_password: process.env.DEFAULT_FACULTY_PASS,
  bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
}
