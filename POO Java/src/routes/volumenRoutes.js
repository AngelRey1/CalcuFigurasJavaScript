const express = require('express');
const router = express.Router();
const volumenController = require('../controllers/volumenController');

router.get('/volumen/cubo', volumenController.volumenCubo);
router.post('/volumen/cubo', volumenController.volumenCubo);
router.get('/volumen/esfera', volumenController.volumenEsfera);
router.post('/volumen/esfera', volumenController.volumenEsfera);
router.get('/volumen/cilindro', volumenController.volumenCilindro);
router.post('/volumen/cilindro', volumenController.volumenCilindro);
router.get('/volumen/cono', volumenController.volumenCono);
router.post('/volumen/cono', volumenController.volumenCono);
router.get('/volumen/prisma', volumenController.volumenPrisma);
router.post('/volumen/prisma', volumenController.volumenPrisma);
router.get('/volumen/piramide', volumenController.volumenPiramide);
router.post('/volumen/piramide', volumenController.volumenPiramide);

module.exports = router; 