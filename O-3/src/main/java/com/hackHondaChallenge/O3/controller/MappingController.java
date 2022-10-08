package com.hackHondaChallenge.O3.controller;

import com.hackHondaChallenge.O3.service.hackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hack22")
@CrossOrigin
public class MappingController {
    @Autowired
    private hackService studentService;

    @GetMapping("/compute")
    public Integer add() {
        int a = studentService.compute(99);
        return a;
    }
}
