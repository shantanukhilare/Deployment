package com.onestopshop.daos;

import com.onestopshop.entities.Product;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    // Find all non-deleted products
    List<Product> findByIsDeletedFalse();

    // Find a product by ID that is not deleted
    Optional<Product> findByIdAndIsDeletedFalse(Long id);
    
}
