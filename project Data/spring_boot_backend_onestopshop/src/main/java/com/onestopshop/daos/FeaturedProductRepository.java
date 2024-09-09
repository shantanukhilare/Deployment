package com.onestopshop.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onestopshop.entities.FeaturedProduct;



public interface FeaturedProductRepository extends JpaRepository<FeaturedProduct, Long>{
	FeaturedProduct findByFileName(String fileName);
}
