package com.onestopshop.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onestopshop.daos.CategoryRepository;
import com.onestopshop.dtos.CategoryDTO;
import com.onestopshop.entities.Category;
import com.onestopshop.exceptionhandling.ResourceNotFoundException;

@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;
    
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Optional<Category> getCategoryById(Long id) {
        return categoryRepository.findById(id);
    }

    @Override
    public Category saveCategory(CategoryDTO dto) {
    	Category category= modelMapper.map(dto, Category.class);
        return categoryRepository.save(category);
    }

    @Override
    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }
    
    @Override
    public Category updateCategory(Long id) {
    Category category=categoryRepository.findById(id)
    		.orElseThrow(()->new ResourceNotFoundException("Category not Found"));
    	return categoryRepository.save(category);
    }
}
