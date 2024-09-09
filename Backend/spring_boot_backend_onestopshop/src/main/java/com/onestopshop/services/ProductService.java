package com.onestopshop.services;

import java.util.List;
import java.util.Optional;

import com.onestopshop.dtos.ProductUpdateDTO;
import com.onestopshop.entities.Product;

public interface ProductService {
    List<Product> getAllProducts();
    Optional<Product> getProductById(Long id);
    Product saveProduct(ProductUpdateDTO productDTO);
    void deleteProduct(Long id);
    Product updateProduct(Long id,ProductUpdateDTO productDTO);
}
