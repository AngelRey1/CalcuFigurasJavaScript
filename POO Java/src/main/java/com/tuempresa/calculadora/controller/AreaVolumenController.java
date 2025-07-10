package com.tuempresa.calculadora.controller;

import com.tuempresa.calculadora.service.AreaVolumenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AreaVolumenController {
    private final AreaVolumenService areaVolumenService;

    @Autowired
    public AreaVolumenController(AreaVolumenService areaVolumenService) {
        this.areaVolumenService = areaVolumenService;
    }

    @GetMapping("/area/circulo")
    public double areaCirculo(@RequestParam double radio) {
        return areaVolumenService.areaCirculo(radio);
    }

    @GetMapping("/volumen/esfera")
    public double volumenEsfera(@RequestParam double radio) {
        return areaVolumenService.volumenEsfera(radio);
    }
} 