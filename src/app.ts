import createError from 'http-errors'
import express, {
  Response as ExResponse,
  Request as ExRequest,
  NextFunction,
} from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import { ValidateError } from 'tsoa'

// import { swaggerUi, specs } from './swaggerConfig.js'
import { RegisterRoutes } from '../dist/routes.js'
export const app = express()

dotenv.config()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// swagger docs
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (
  err: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  req: ExRequest,
  res: ExResponse,
  next: NextFunction,
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
})

RegisterRoutes(app)
