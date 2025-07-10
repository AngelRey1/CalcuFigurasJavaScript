const express = require('express');
const router = express.Router();
const areaController = require('../controllers/areaController');

/**
 * @swagger
 * /area/circulo:
 *   get:
 *   post:
 *     summary: Calcula el área de un círculo
 *     description: Devuelve el área de un círculo dado su radio. Soporta GET (query) y POST (body JSON).
 *     parameters:
 *       - in: query
 *         name: radio
 *         schema:
 *           type: number
 *         required: true
 *         description: Radio del círculo
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               radio:
 *                 type: number
 *                 example: 2
 *     responses:
 *       200:
 *         description: Área del círculo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     area:
 *                       type: number
 *                       example: 12.566
 *       400:
 *         description: Parámetro inválido
 */
router.get('/area/circulo', areaController.areaCirculo);
router.post('/area/circulo', areaController.areaCirculo);

/**
 * @swagger
 * /area/cuadrado:
 *   get:
 *   post:
 *     summary: Calcula el área de un cuadrado
 *     description: Devuelve el área de un cuadrado dado su lado. Soporta GET (query) y POST (body JSON).
 *     parameters:
 *       - in: query
 *         name: lado
 *         schema:
 *           type: number
 *         required: true
 *         description: Lado del cuadrado
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lado:
 *                 type: number
 *                 example: 3
 *     responses:
 *       200:
 *         description: Área del cuadrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     area:
 *                       type: number
 *                       example: 9
 *       400:
 *         description: Parámetro inválido
 */
router.get('/area/cuadrado', areaController.areaCuadrado);
router.post('/area/cuadrado', areaController.areaCuadrado);

/**
 * @swagger
 * /area/rectangulo:
 *   get:
 *   post:
 *     summary: Calcula el área de un rectángulo
 *     description: Devuelve el área de un rectángulo dados base y altura. Soporta GET (query) y POST (body JSON).
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
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               base:
 *                 type: number
 *                 example: 4
 *               altura:
 *                 type: number
 *                 example: 5
 *     responses:
 *       200:
 *         description: Área del rectángulo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     area:
 *                       type: number
 *                       example: 20
 *       400:
 *         description: Parámetro inválido
 */
router.get('/area/rectangulo', areaController.areaRectangulo);
router.post('/area/rectangulo', areaController.areaRectangulo);

/**
 * @swagger
 * /area/triangulo:
 *   get:
 *   post:
 *     summary: Calcula el área de un triángulo
 *     description: Devuelve el área de un triángulo dados base y altura. Soporta GET (query) y POST (body JSON).
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
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               base:
 *                 type: number
 *                 example: 4
 *               altura:
 *                 type: number
 *                 example: 3
 *     responses:
 *       200:
 *         description: Área del triángulo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     area:
 *                       type: number
 *                       example: 6
 *       400:
 *         description: Parámetro inválido
 */
router.get('/area/triangulo', areaController.areaTriangulo);
router.post('/area/triangulo', areaController.areaTriangulo);

/**
 * @swagger
 * /area/trapecio:
 *   get:
 *   post:
 *     summary: Calcula el área de un trapecio
 *     description: Devuelve el área de un trapecio dadas base mayor, base menor y altura. Soporta GET (query) y POST (body JSON).
 *     parameters:
 *       - in: query
 *         name: baseMayor
 *         schema:
 *           type: number
 *         required: true
 *         description: Base mayor del trapecio
 *       - in: query
 *         name: baseMenor
 *         schema:
 *           type: number
 *         required: true
 *         description: Base menor del trapecio
 *       - in: query
 *         name: altura
 *         schema:
 *           type: number
 *         required: true
 *         description: Altura del trapecio
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               baseMayor:
 *                 type: number
 *                 example: 8
 *               baseMenor:
 *                 type: number
 *                 example: 4
 *               altura:
 *                 type: number
 *                 example: 5
 *     responses:
 *       200:
 *         description: Área del trapecio
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     area:
 *                       type: number
 *                       example: 30
 *       400:
 *         description: Parámetro inválido
 */
router.get('/area/trapecio', areaController.areaTrapecio);
router.post('/area/trapecio', areaController.areaTrapecio);

// Volúmenes
router.get('/volumen/cubo', areaController.volumenCubo);
router.get('/volumen/esfera', areaController.volumenEsfera);
router.get('/volumen/cilindro', areaController.volumenCilindro);
router.get('/volumen/cono', areaController.volumenCono);

module.exports = router; 