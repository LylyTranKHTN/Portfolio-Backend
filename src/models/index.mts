import { Sequelize, importModels } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));


const sequelizeConfig = {
  dialect: PostgresDialect,
  user: "postgres",
  password: "1",
  database: "postgres",
  host: "127.0.0.1",
  port: 5432,
  models: await importModels(__dirname + '/**/*.model.{ts}'),
}

const sequelize = new Sequelize(sequelizeConfig);

sequelize
  .authenticate()
  .then(() => {
  console.log('Connection has been established successfully.');
  })
  .catch(err => {
  console.error('Unable to connect to the database:', err);
  });

export default sequelize;
