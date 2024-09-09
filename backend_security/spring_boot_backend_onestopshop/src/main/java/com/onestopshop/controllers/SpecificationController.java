package com.onestopshop.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.onestopshop.dtos.SpecificationDTO;
import com.onestopshop.entities.Specification;
import com.onestopshop.services.SpecificationService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SpecificationController {

    @Autowired
    private SpecificationService specificationService;

    @PostMapping("/admin-seller/specifications")
    public ResponseEntity<Specification> addSpecification(@RequestBody SpecificationDTO specificationDTO) {
        Specification createdSpecification = specificationService.addSpecification(specificationDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSpecification);
    }

    @GetMapping("/all/specifications/{id}")
    public ResponseEntity<SpecificationDTO> getSpecificationById(@PathVariable Long id) {
        SpecificationDTO specificationDTO = specificationService.getSpecificationById(id);
        return ResponseEntity.ok(specificationDTO);
    }

    @GetMapping("/all/specifications")
    public ResponseEntity<List<Specification>> getAllSpecifications() {
        List<Specification> specifications = specificationService.getAllSpecifications();
        return ResponseEntity.ok(specifications);
    }
    
    @PutMapping("/admin-seller/specifications/{id}")
    public ResponseEntity<SpecificationDTO> updateSpecification(
            @PathVariable Long id, 
            @RequestBody SpecificationDTO specificationDTO) {
        
        SpecificationDTO updatedSpecification = specificationService.updateSpecification(id, specificationDTO);
        return ResponseEntity.ok(updatedSpecification);
    }
}
