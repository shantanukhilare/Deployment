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
import com.onestopshop.daos.UserRepository;
import com.onestopshop.dtos.ApiResponse;
import com.onestopshop.dtos.ProductDTO;
import com.onestopshop.dtos.ProductInventoryDTO;
import com.onestopshop.dtos.ProductUpdateDTO;
import com.onestopshop.entities.Category;
import com.onestopshop.entities.Product;
import com.onestopshop.entities.Specification;
import com.onestopshop.entities.User;
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
	private UserRepository userRepository;
	
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

	@Override
	public List<Product> getProductsByUser(Long userId, boolean deleted) {
		User user=userRepository.findById(userId)
					.orElseThrow(()->new ResourceNotFoundException("User not Found"));
		return productRepository.findByUserAndIsDeleted(user, false);
	}

	@Override
	public Optional<Product> getProductById(Long id) {
		return productRepository.findById(id);
	}

	@Override
	public Product saveProduct(ProductDTO dto,Long userId) {
		User user=userRepository.findById(userId)
				.orElseThrow(()->new ResourceNotFoundException("User not Found"));
		
		Category category = categoryRepository.findById(dto.getCategoryId())
				.orElseThrow(() -> new RuntimeException("Category not found"));

		Specification specification = specificationRepository.findById(dto.getSpecificationId())
				.orElseThrow(() -> new ResourceNotFoundException("Specifications not found..."));

		//specification = specificationRepository.save(specification);

		Product product = modelMapper.map(dto, Product.class);
		product.setSpecification(specification);
		product.setDeleted(false);
		product.setCategory(category);
		product.setUser(user);
		return productRepository.save(product);
	}

	@Override
	public Product updateProduct(Long id, ProductUpdateDTO dto) {
	    // Check if id is null
	    if (id == null) {
	        throw new IllegalArgumentException("Your Product ID must not be null");
	    }

	    Product product = productRepository.findById(id)
	            .orElseThrow(() -> new ResourceNotFoundException("Product not found..."));

	    modelMapper.map(dto, product);
	    
	    Category category = categoryRepository.findById(dto.getCategoryId())
				.orElseThrow(() -> new RuntimeException("Category not found"));

	    Specification specification = specificationRepository.findById(dto.getSpecificationId())
	            .orElseThrow(() -> new ResourceNotFoundException("Specifications not found..."));

	    product.setSpecification(specification);
	    product.setCategory(category);
	    product.setUpdatedOn(LocalDateTime.now());
	    
	    return productRepository.save(product);
	}

	@Override
	public ApiResponse updateInventory(ProductInventoryDTO dto) {
		Product product = productRepository.findById(dto.getProductId())
				.orElseThrow(() -> new ResourceNotFoundException("Product not found..."));

		if (dto.getQuantity() < product.getInventory()) {
			int updatedInventory = product.getInventory() - dto.getQuantity();
			product.setInventory(updatedInventory);
			productRepository.save(product);
			return new ApiResponse("Inventory updated successful!!!");
		} else {
			return new ApiResponse("Sorry. We dont have Enough items in out inventory...");
		}
	}

	@Override
	public Product deleteProduct(Long id) {
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found..."));
		
		product.setDeleted(true);

		return productRepository.save(product);
	}

	@Override
	public List<Product> getProductByName(String productName) {
		return productRepository.findByProductName(productName);		
	}


}
