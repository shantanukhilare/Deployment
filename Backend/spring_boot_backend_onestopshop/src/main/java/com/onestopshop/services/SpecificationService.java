package com.onestopshop.services;

import java.util.List;

import com.onestopshop.dtos.SpecificationDTO;
import com.onestopshop.entities.Specification;

public interface SpecificationService {
    SpecificationDTO addSpecification(SpecificationDTO specificationDTO);
    SpecificationDTO getSpecificationById(Long id);
    List<Specification> getAllSpecifications();
}
