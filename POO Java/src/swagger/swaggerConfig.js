const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Calculadora de Áreas y Volúmenes',
    version: '1.0.0',
    description: 'API para calcular áreas y volúmenes de figuras geométricas. Soporta GET y POST. Respuestas uniformes y validaciones robustas.',
  },
  servers: [
    {
      url: 'http://localhost:3000',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/areaRoutes.js', './src/routes/volumenRoutes.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec; 