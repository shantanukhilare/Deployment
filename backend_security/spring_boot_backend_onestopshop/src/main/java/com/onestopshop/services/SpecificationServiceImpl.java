package com.onestopshop.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.onestopshop.daos.SpecificationRepository;
import com.onestopshop.dtos.SpecificationDTO;
import com.onestopshop.entities.Specification;

@Service
@Transactional
public class SpecificationServiceImpl implements SpecificationService {

    @Autowired
    private SpecificationRepository specificationRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public Specification addSpecification(SpecificationDTO dto) {
        Specification specification = modelMapper.map(dto, Specification.class);
        Specification savedSpecification = specificationRepository.save(specification);
        return savedSpecification;
    }

    @Override
    public SpecificationDTO getSpecificationById(Long id) {
        Specification specification = specificationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Specification not found"));
        return modelMapper.map(specification, SpecificationDTO.class);
    }
    
    @Override
    public SpecificationDTO updateSpecification(Long id, SpecificationDTO specificationDTO) {
        Specification specification = specificationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Specification not found for id: " + id));
        
        modelMapper.map(specificationDTO, specification);
        
        Specification updatedSpecification = specificationRepository.save(specification);
        
        return modelMapper.map(updatedSpecification, SpecificationDTO.class);
    }

    @Override
    public List<Specification> getAllSpecifications() {
        return specificationRepository.findAll();
    }
}
