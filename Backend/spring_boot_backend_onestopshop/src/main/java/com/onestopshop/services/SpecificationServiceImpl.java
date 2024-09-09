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
    public SpecificationDTO addSpecification(SpecificationDTO specificationDTO) {
        Specification specification = modelMapper.map(specificationDTO, Specification.class);
        Specification savedSpecification = specificationRepository.save(specification);
        return modelMapper.map(savedSpecification, SpecificationDTO.class);
    }

    @Override
    public SpecificationDTO getSpecificationById(Long id) {
        Specification specification = specificationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Specification not found"));
        return modelMapper.map(specification, SpecificationDTO.class);
    }

    @Override
    public List<Specification> getAllSpecifications() {
        return specificationRepository.findAll();
    }
}
