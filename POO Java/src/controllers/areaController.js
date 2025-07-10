const { successResponse, errorResponse } = require('../utils/responseHelpers');

exports.areaCirculo = (req, res) => {
  const radio = parseFloat(req.method === 'POST' ? req.body.radio : req.query.radio);
  if (isNaN(radio) || radio <= 0) {
    return res.status(400).json(errorResponse('El radio debe ser un número positivo.', 'radio'));
  }
  const area = Math.PI * radio * radio;
  res.json(successResponse({ area }));
};

exports.areaCuadrado = (req, res) => {
  const lado = parseFloat(req.method === 'POST' ? req.body.lado : req.query.lado);
  if (isNaN(lado) || lado <= 0) {
    return res.status(400).json(errorResponse('El lado debe ser un número positivo.', 'lado'));
  }
  const area = lado * lado;
  res.json(successResponse({ area }));
};

exports.areaRectangulo = (req, res) => {
  const base = parseFloat(req.method === 'POST' ? req.body.base : req.query.base);
  const altura = parseFloat(req.method === 'POST' ? req.body.altura : req.query.altura);
  if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
    return res.status(400).json(errorResponse('Base y altura deben ser números positivos.', 'base/altura'));
  }
  const area = base * altura;
  res.json(successResponse({ area }));
};

exports.areaTriangulo = (req, res) => {
  const base = parseFloat(req.method === 'POST' ? req.body.base : req.query.base);
  const altura = parseFloat(req.method === 'POST' ? req.body.altura : req.query.altura);
  if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
    return res.status(400).json(errorResponse('Base y altura deben ser números positivos.', 'base/altura'));
  }
  const area = (base * altura) / 2;
  res.json(successResponse({ area }));
};

exports.areaTrapecio = (req, res) => {
  const baseMayor = parseFloat(req.method === 'POST' ? req.body.baseMayor : req.query.baseMayor);
  const baseMenor = parseFloat(req.method === 'POST' ? req.body.baseMenor : req.query.baseMenor);
  const altura = parseFloat(req.method === 'POST' ? req.body.altura : req.query.altura);
  if (isNaN(baseMayor) || baseMayor <= 0 || isNaN(baseMenor) || baseMenor <= 0 || isNaN(altura) || altura <= 0) {
    return res.status(400).json(errorResponse('Base mayor, base menor y altura deben ser números positivos.', 'baseMayor/baseMenor/altura'));
  }
  const area = ((baseMayor + baseMenor) * altura) / 2;
  res.json(successResponse({ area }));
};

exports.volumenCubo = (req, res) => {
  const lado = parseFloat(req.query.lado);
  if (isNaN(lado) || lado <= 0) {
    return res.status(400).json({ error: 'El lado debe ser un número positivo.' });
  }
  const volumen = Math.pow(lado, 3);
  res.json({ volumen });
};

exports.volumenEsfera = (req, res) => {
  const radio = parseFloat(req.query.radio);
  if (isNaN(radio) || radio <= 0) {
    return res.status(400).json({ error: 'El radio debe ser un número positivo.' });
  }
  const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
  res.json({ volumen });
};

exports.volumenCilindro = (req, res) => {
  const radio = parseFloat(req.query.radio);
  const altura = parseFloat(req.query.altura);
  if (isNaN(radio) || radio <= 0 || isNaN(altura) || altura <= 0) {
    return res.status(400).json({ error: 'Radio y altura deben ser números positivos.' });
  }
  const volumen = Math.PI * Math.pow(radio, 2) * altura;
  res.json({ volumen });
};

exports.volumenCono = (req, res) => {
  const radio = parseFloat(req.query.radio);
  const altura = parseFloat(req.query.altura);
  if (isNaN(radio) || radio <= 0 || isNaN(altura) || altura <= 0) {
    return res.status(400).json({ error: 'Radio y altura deben ser números positivos.' });
  }
  const volumen = (Math.PI * Math.pow(radio, 2) * altura) / 3;
  res.json({ volumen });
}; 