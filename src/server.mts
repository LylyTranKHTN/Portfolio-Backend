#!/usr/bin/env node

/**
 * Module dependencies.
 */
import {app} from './app.js';
import sequelize from './models/index.mjs';

const port = normalizePort(process.env.PORT ?? '3000');


/**
 * Listen on provided port, on all network interfaces.
 */

sequelize.sync().then(() => {
  app.listen(port, () => {console.log('Listening on: http://localhost:3000')});
})


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: any) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
