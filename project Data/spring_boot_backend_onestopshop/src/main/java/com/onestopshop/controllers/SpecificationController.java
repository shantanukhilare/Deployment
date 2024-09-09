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
@RequestMapping("/seller/specifications")
@CrossOrigin(origins = "http://localhost:3000")
public class SpecificationController {

    @Autowired
    private SpecificationService specificationService;

    @PostMapping
    public ResponseEntity<Specification> addSpecification(@RequestBody SpecificationDTO specificationDTO) {
        Specification createdSpecification = specificationService.addSpecification(specificationDTO);
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
    
    @PutMapping("/{id}")
    public ResponseEntity<SpecificationDTO> updateSpecification(
            @PathVariable Long id, 
            @RequestBody SpecificationDTO specificationDTO) {
        
        SpecificationDTO updatedSpecification = specificationService.updateSpecification(id, specificationDTO);
        return ResponseEntity.ok(updatedSpecification);
    }
}
