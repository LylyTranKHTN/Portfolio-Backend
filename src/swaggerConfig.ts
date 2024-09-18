const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Lily APIs',
      version: '1.0.0',
      description: 'APIs for Lily\'s portfolio',
    },
  },
  apis: ['./routes/*.js', './routes/*.ts'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };