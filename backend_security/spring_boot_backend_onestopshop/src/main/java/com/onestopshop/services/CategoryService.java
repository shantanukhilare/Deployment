package com.onestopshop.services;

import com.onestopshop.dtos.CategoryDTO;
import com.onestopshop.entities.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    List<Category> getAllCategories();
    Optional<Category> getCategoryById(Long id);
    Category saveCategory(CategoryDTO dto);
    void deleteCategory(Long id);
    Category updateCategory(Long id,CategoryDTO dto);
}
