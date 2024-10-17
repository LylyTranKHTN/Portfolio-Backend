import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
import { Theme } from './theme.model.js';

const sequelizeConfig = {
  dialect: PostgresDialect,
  user: 'postgres',
  password: '1',
  database: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  // Sends the logging output to the console
  logging: console.log,
  ssl: false,
  models: [Theme],
};

const sequelize = new Sequelize(sequelizeConfig);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
