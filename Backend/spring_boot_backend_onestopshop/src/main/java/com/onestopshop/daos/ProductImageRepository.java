package com.onestopshop.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onestopshop.entities.ProductImage;


public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {
	ProductImage findByFileName(String fileName);
}
