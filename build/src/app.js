import createError from 'http-errors'
import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import { ValidateError } from 'tsoa'
import swaggerUi from 'swagger-ui-express'
import { RegisterRoutes } from '../dist/routes.js'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
const require = createRequire(import.meta.url)
const swaggerJson = require('../dist/swagger.json')
const __dirname = dirname(fileURLToPath(import.meta.url))
export const app = express()
dotenv.config()
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// swagger docs
app.use('/docs', swaggerUi.serve, async (_req, res) => {
  return res.send(swaggerUi.generateHTML(swaggerJson))
})
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})
// error handler
app.use(
  function (
    err, // eslint-disable-line @typescript-eslint/no-explicit-any
    req,
    res,
    next,
  ) {
    // set locals, only providing error in development
    res.locals.message = err?.message ?? 'Internal Server Error'
    res.locals.error = req.app.get('env') === 'development' ? err : {}
    if (err instanceof ValidateError) {
      console.warn(`Caught Validation Error for ${req.path}:`, err.fields)
      return res.status(422).json({
        message: 'Validation Failed',
        details: err?.fields,
      })
    }
    if (err instanceof Error) {
      return res.status(500).json({
        message: 'Internal Server Error',
      })
    }
    next()
  },
)
RegisterRoutes(app)
