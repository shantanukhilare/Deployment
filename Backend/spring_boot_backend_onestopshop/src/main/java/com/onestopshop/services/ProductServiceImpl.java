package com.onestopshop.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onestopshop.daos.CategoryRepository;
import com.onestopshop.daos.ProductRepository;
import com.onestopshop.daos.SpecificationRepository;
import com.onestopshop.dtos.ProductUpdateDTO;
import com.onestopshop.entities.Category;
import com.onestopshop.entities.Product;
import com.onestopshop.entities.Specification;
import com.onestopshop.exceptionhandling.ResourceNotFoundException;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private CategoryRepository categoryRepository;

	@Autowired
	private SpecificationRepository specificationRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

	@Override
	public Optional<Product> getProductById(Long id) {
		return productRepository.findById(id);
	}

	@Override
	public Product saveProduct(ProductUpdateDTO dto) {
	    Category category = categoryRepository.findById(dto.getCategoryId())
	            .orElseThrow(() -> new RuntimeException("Category not found"));

	    Specification specification = specificationRepository.findById(dto.getSpecificationId())
	            .orElseThrow(() -> new ResourceNotFoundException("Specifications not found..."));
	    
	    // Make sure the specification is managed by the persistence context
	    specification = specificationRepository.save(specification);

	    Product product = modelMapper.map(dto, Product.class);
	    product.setSpecification(specification);
	    
	    category.addProduct(product);
	    product.setCategory(category);
	    
	    return productRepository.save(product);
	}

	@Override
	public Product updateProduct(Long id, ProductUpdateDTO productDTO) {
		// Check if id is null
		if (id == null) {
			throw new IllegalArgumentException("Product ID must not be null");
		}

		// Fetch existing product by id
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found..."));

		// Map the productDTO to product entity
		modelMapper.map(productDTO, product);

		// Fetch the category
		Category category = categoryRepository.findById(productDTO.getCategoryId())
				.orElseThrow(() -> new ResourceNotFoundException("Category not found..."));

		Specification specification = specificationRepository.findById(productDTO.getSpecificationId())
				.orElseThrow(() -> new ResourceNotFoundException("Category not found..."));

		// Update the product entity
		category.addProduct(product);
		product.setSpecification(specification);
		product.setUpdatedOn(LocalDateTime.now());

		// Save and return the updated product
		return productRepository.save(product);
	}

	@Override
	public void deleteProduct(Long id) {
		productRepository.deleteById(id);
	}
	
}
