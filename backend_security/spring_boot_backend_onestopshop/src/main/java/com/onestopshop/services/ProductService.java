package com.onestopshop.services;

import java.util.List;
import java.util.Optional;

import com.onestopshop.dtos.ApiResponse;
import com.onestopshop.dtos.ProductDTO;
import com.onestopshop.dtos.ProductInventoryDTO;
import com.onestopshop.dtos.ProductUpdateDTO;
import com.onestopshop.entities.Product;

public interface ProductService {
    List<Product> getAllProducts();
    Optional<Product> getProductById(Long id);
    Product saveProduct(ProductDTO productDTO,Long userId);
    Product updateProduct(Long id,ProductUpdateDTO productDTO);
    ApiResponse updateInventory(ProductInventoryDTO dto);
    Product deleteProduct(Long id);
    List<Product> getProductsByUser(Long userId, boolean deleted);
    List<Product> getProductByName(String productName);
}
