DATABASE:

Postgres: Can use Docker image here: https://hub.docker.com/_/postgres
(Check file config/config.json for db configuration)

Sequelize: https://sequelize.org/

Database naming convention: https://www.sqlshack.com/learn-sql-naming-conventions/

To generate database migration file run:

`npx sequelize-cli migration:generate --name migration-example`

To generate database model run:

`npx sequelize-cli migration:generate --name Theme --attributes name:string,title:string,value:string,created_at:date,updated_at:date`

Conventional commit: https://www.conventionalcommits.org/en/v1.0.0/

# Development

## Run migrate Db

`npm run migrate`

## Run the server

`npm run dev`
