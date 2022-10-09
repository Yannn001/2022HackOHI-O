package com.hackHondaChallenge.O3.controller;

import com.hackHondaChallenge.O3.service.hackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@RestController
@RequestMapping("/hack22")
@CrossOrigin
public class MappingController {
    @Autowired
    private hackService studentService;

    @GetMapping("/compute/{start}/{end}/{canDrive}/{canWalk}/{isStudent}")
    public String compute(@PathVariable String start, @PathVariable String end, @PathVariable Boolean canDrive, @PathVariable Boolean canWalk, @PathVariable Boolean isStudent) {

        return studentService.getSolution(studentService.allRoute(start, end), canDrive, canWalk, isStudent);
    }
}
