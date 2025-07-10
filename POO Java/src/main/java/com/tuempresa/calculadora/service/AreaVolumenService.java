package com.tuempresa.calculadora.service;

import org.springframework.stereotype.Service;

@Service
public class AreaVolumenService {
    public double areaCirculo(double radio) {
        return Math.PI * radio * radio;
    }

    public double volumenEsfera(double radio) {
        return (4.0 / 3.0) * Math.PI * Math.pow(radio, 3);
    }
} 