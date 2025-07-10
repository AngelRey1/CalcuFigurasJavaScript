const express = require('express');
const areaRoutes = require('./src/routes/areaRoutes');
const volumenRoutes = require('./src/routes/volumenRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/swagger/swaggerConfig');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', areaRoutes);
app.use('/', volumenRoutes);

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
  console.log(`Documentación Swagger en http://localhost:${port}/api-docs`);
}); 