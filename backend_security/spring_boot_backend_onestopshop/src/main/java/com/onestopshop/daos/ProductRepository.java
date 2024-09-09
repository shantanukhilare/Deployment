package com.onestopshop.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.onestopshop.entities.Product;
import com.onestopshop.entities.User;
import java.util.List;


@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    // Find all non-deleted products
//    List<Product> findByIsDeletedFalse();

    // Find a product by ID that is not deleted
//    Optional<Product> findByIdAndIsDeletedFalse(Long id);
	
	List<Product> findByUserAndIsDeleted(User user, boolean isDeleted);
	List<Product> findByProductName(String productName);
    
}
