package com.onestopshop.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.onestopshop.dtos.SpecificationDTO;
import com.onestopshop.entities.Specification;
import com.onestopshop.services.SpecificationService;

@RestController
@RequestMapping("/specifications")
@CrossOrigin(origins = "http://localhost:3000")
public class SpecificationController {

    @Autowired
    private SpecificationService specificationService;

    @PostMapping
    public ResponseEntity<SpecificationDTO> addSpecification(@RequestBody SpecificationDTO specificationDTO) {
        SpecificationDTO createdSpecification = specificationService.addSpecification(specificationDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSpecification);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SpecificationDTO> getSpecificationById(@PathVariable Long id) {
        SpecificationDTO specificationDTO = specificationService.getSpecificationById(id);
        return ResponseEntity.ok(specificationDTO);
    }

    @GetMapping
    public ResponseEntity<List<Specification>> getAllSpecifications() {
        List<Specification> specifications = specificationService.getAllSpecifications();
        return ResponseEntity.ok(specifications);
    }
}
