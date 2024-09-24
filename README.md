DATABASE:

Sequelize: https://sequelize.org/

Database naming convention: https://www.sqlshack.com/learn-sql-naming-conventions/

To generate database migration file run:

`npx sequelize-cli migration:generate --name migration-example`

To generate database model run:

`npx sequelize-cli migration:generate --name Theme --attributes name:string,title:string,value:string,created_at:date,updated_at:date`
