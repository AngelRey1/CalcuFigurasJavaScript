const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();
const port = 3000;

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Calculadora de Áreas y Volúmenes',
    version: '1.0.0',
    description: 'API para calcular áreas y volúmenes de figuras geométricas',
  },
  servers: [
    {
      url: `http://localhost:${port}`,
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./app.js'],
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /area/circulo:
 *   get:
 *     summary: Calcula el área de un círculo
 *     parameters:
 *       - in: query
 *         name: radio
 *         schema:
 *           type: number
 *         required: true
 *         description: Radio del círculo
 *     responses:
 *       200:
 *         description: Área del círculo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 area:
 *                   type: number
 */
app.get('/area/circulo', (req, res) => {
  const radio = parseFloat(req.query.radio);
  if (isNaN(radio) || radio <= 0) {
    return res.status(400).json({ error: 'El radio debe ser un número positivo.' });
  }
  const area = Math.PI * radio * radio;
  res.json({ area });
});

/**
 * @swagger
 * /area/cuadrado:
 *   get:
 *     summary: Calcula el área de un cuadrado
 *     parameters:
 *       - in: query
 *         name: lado
 *         schema:
 *           type: number
 *         required: true
 *         description: Lado del cuadrado
 *     responses:
 *       200:
 *         description: Área del cuadrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 area:
 *                   type: number
 */
app.get('/area/cuadrado', (req, res) => {
  const lado = parseFloat(req.query.lado);
  if (isNaN(lado) || lado <= 0) {
    return res.status(400).json({ error: 'El lado debe ser un número positivo.' });
  }
  const area = lado * lado;
  res.json({ area });
});

/**
 * @swagger
 * /area/rectangulo:
 *   get:
 *     summary: Calcula el área de un rectángulo
 *     parameters:
 *       - in: query
 *         name: base
 *         schema:
 *           type: number
 *         required: true
 *         description: Base del rectángulo
 *       - in: query
 *         name: altura
 *         schema:
 *           type: number
 *         required: true
 *         description: Altura del rectángulo
 *     responses:
 *       200:
 *         description: Área del rectángulo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 area:
 *                   type: number
 */
app.get('/area/rectangulo', (req, res) => {
  const base = parseFloat(req.query.base);
  const altura = parseFloat(req.query.altura);
  if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
    return res.status(400).json({ error: 'Base y altura deben ser números positivos.' });
  }
  const area = base * altura;
  res.json({ area });
});

/**
 * @swagger
 * /area/triangulo:
 *   get:
 *     summary: Calcula el área de un triángulo
 *     parameters:
 *       - in: query
 *         name: base
 *         schema:
 *           type: number
 *         required: true
 *         description: Base del triángulo
 *       - in: query
 *         name: altura
 *         schema:
 *           type: number
 *         required: true
 *         description: Altura del triángulo
 *     responses:
 *       200:
 *         description: Área del triángulo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 area:
 *                   type: number
 */
app.get('/area/triangulo', (req, res) => {
  const base = parseFloat(req.query.base);
  const altura = parseFloat(req.query.altura);
  if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
    return res.status(400).json({ error: 'Base y altura deben ser números positivos.' });
  }
  const area = (base * altura) / 2;
  res.json({ area });
});

/**
 * @swagger
 * /volumen/cubo:
 *   get:
 *     summary: Calcula el volumen de un cubo
 *     parameters:
 *       - in: query
 *         name: lado
 *         schema:
 *           type: number
 *         required: true
 *         description: Lado del cubo
 *     responses:
 *       200:
 *         description: Volumen del cubo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 volumen:
 *                   type: number
 */
app.get('/volumen/cubo', (req, res) => {
  const lado = parseFloat(req.query.lado);
  if (isNaN(lado) || lado <= 0) {
    return res.status(400).json({ error: 'El lado debe ser un número positivo.' });
  }
  const volumen = Math.pow(lado, 3);
  res.json({ volumen });
});

/**
 * @swagger
 * /volumen/esfera:
 *   get:
 *     summary: Calcula el volumen de una esfera
 *     parameters:
 *       - in: query
 *         name: radio
 *         schema:
 *           type: number
 *         required: true
 *         description: Radio de la esfera
 *     responses:
 *       200:
 *         description: Volumen de la esfera
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 volumen:
 *                   type: number
 */
app.get('/volumen/esfera', (req, res) => {
  const radio = parseFloat(req.query.radio);
  if (isNaN(radio) || radio <= 0) {
    return res.status(400).json({ error: 'El radio debe ser un número positivo.' });
  }
  const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
  res.json({ volumen });
});

/**
 * @swagger
 * /volumen/cilindro:
 *   get:
 *     summary: Calcula el volumen de un cilindro
 *     parameters:
 *       - in: query
 *         name: radio
 *         schema:
 *           type: number
 *         required: true
 *         description: Radio de la base del cilindro
 *       - in: query
 *         name: altura
 *         schema:
 *           type: number
 *         required: true
 *         description: Altura del cilindro
 *     responses:
 *       200:
 *         description: Volumen del cilindro
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 volumen:
 *                   type: number
 */
app.get('/volumen/cilindro', (req, res) => {
  const radio = parseFloat(req.query.radio);
  const altura = parseFloat(req.query.altura);
  if (isNaN(radio) || radio <= 0 || isNaN(altura) || altura <= 0) {
    return res.status(400).json({ error: 'Radio y altura deben ser números positivos.' });
  }
  const volumen = Math.PI * Math.pow(radio, 2) * altura;
  res.json({ volumen });
});

/**
 * @swagger
 * /volumen/cono:
 *   get:
 *     summary: Calcula el volumen de un cono
 *     parameters:
 *       - in: query
 *         name: radio
 *         schema:
 *           type: number
 *         required: true
 *         description: Radio de la base del cono
 *       - in: query
 *         name: altura
 *         schema:
 *           type: number
 *         required: true
 *         description: Altura del cono
 *     responses:
 *       200:
 *         description: Volumen del cono
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 volumen:
 *                   type: number
 */
app.get('/volumen/cono', (req, res) => {
  const radio = parseFloat(req.query.radio);
  const altura = parseFloat(req.query.altura);
  if (isNaN(radio) || radio <= 0 || isNaN(altura) || altura <= 0) {
    return res.status(400).json({ error: 'Radio y altura deben ser números positivos.' });
  }
  const volumen = (Math.PI * Math.pow(radio, 2) * altura) / 3;
  res.json({ volumen });
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
  console.log(`Documentación Swagger en http://localhost:${port}/api-docs`);
});