import express, {
  Response as ExResponse,
  Request as ExRequest,
  NextFunction,
} from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { ValidateError } from 'tsoa';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from '../dist/routes.js';
import { createRequire } from 'node:module';
import cors from 'cors';

const require = createRequire(import.meta.url);
const swaggerJson = require('../dist/swagger.json');

export const app = express();

dotenv.config();

// view engine setup

// app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// swagger docs
app.use('/docs', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(swaggerUi.generateHTML(swaggerJson));
});

RegisterRoutes(app);

// handle missing routes
app.use(function notFoundHandler(_req, res: ExResponse) {
  res.status(404).send({
    message: 'Not Found',
  });
});

// Configure CORS
app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
);

// error handler
app.use(function (
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction,
) {
  // handle validation errors
  if (err instanceof ValidateError) {
    return res.status(422).json({
      message: 'Validation Failed',
      details: err?.fields,
    });
  }

  if (err instanceof Error) {
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }

  next();
});
