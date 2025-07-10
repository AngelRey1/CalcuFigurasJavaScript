const { successResponse, errorResponse } = require('../utils/responseHelpers');

exports.volumenCubo = (req, res) => {
  const lado = parseFloat(req.method === 'POST' ? req.body.lado : req.query.lado);
  if (isNaN(lado) || lado <= 0) {
    return res.status(400).json(errorResponse('El lado debe ser un número positivo.', 'lado'));
  }
  const volumen = Math.pow(lado, 3);
  res.json(successResponse({ volumen }));
};

exports.volumenEsfera = (req, res) => {
  const radio = parseFloat(req.method === 'POST' ? req.body.radio : req.query.radio);
  if (isNaN(radio) || radio <= 0) {
    return res.status(400).json(errorResponse('El radio debe ser un número positivo.', 'radio'));
  }
  const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
  res.json(successResponse({ volumen }));
};

exports.volumenCilindro = (req, res) => {
  const radio = parseFloat(req.method === 'POST' ? req.body.radio : req.query.radio);
  const altura = parseFloat(req.method === 'POST' ? req.body.altura : req.query.altura);
  if (isNaN(radio) || radio <= 0 || isNaN(altura) || altura <= 0) {
    return res.status(400).json(errorResponse('Radio y altura deben ser números positivos.', 'radio/altura'));
  }
  const volumen = Math.PI * Math.pow(radio, 2) * altura;
  res.json(successResponse({ volumen }));
};

exports.volumenCono = (req, res) => {
  const radio = parseFloat(req.method === 'POST' ? req.body.radio : req.query.radio);
  const altura = parseFloat(req.method === 'POST' ? req.body.altura : req.query.altura);
  if (isNaN(radio) || radio <= 0 || isNaN(altura) || altura <= 0) {
    return res.status(400).json(errorResponse('Radio y altura deben ser números positivos.', 'radio/altura'));
  }
  const volumen = (Math.PI * Math.pow(radio, 2) * altura) / 3;
  res.json(successResponse({ volumen }));
};

exports.volumenPrisma = (req, res) => {
  const base = parseFloat(req.method === 'POST' ? req.body.base : req.query.base);
  const altura = parseFloat(req.method === 'POST' ? req.body.altura : req.query.altura);
  const profundidad = parseFloat(req.method === 'POST' ? req.body.profundidad : req.query.profundidad);
  if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0 || isNaN(profundidad) || profundidad <= 0) {
    return res.status(400).json(errorResponse('Base, altura y profundidad deben ser números positivos.', 'base/altura/profundidad'));
  }
  const volumen = base * altura * profundidad;
  res.json(successResponse({ volumen }));
};

exports.volumenPiramide = (req, res) => {
  const base = parseFloat(req.method === 'POST' ? req.body.base : req.query.base);
  const altura = parseFloat(req.method === 'POST' ? req.body.altura : req.query.altura);
  if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
    return res.status(400).json(errorResponse('Base y altura deben ser números positivos.', 'base/altura'));
  }
  const volumen = (base * altura) / 3;
  res.json(successResponse({ volumen }));
}; 