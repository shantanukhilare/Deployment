package com.onestopshop.services;

import java.util.List;

import com.onestopshop.dtos.SpecificationDTO;
import com.onestopshop.entities.Specification;

public interface SpecificationService {
    Specification addSpecification(SpecificationDTO dto);
    SpecificationDTO getSpecificationById(Long id);
    List<Specification> getAllSpecifications(); SpecificationDTO updateSpecification(Long id, SpecificationDTO specificationDTO);

}
