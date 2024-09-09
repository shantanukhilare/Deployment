package com.onestopshop.services;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.onestopshop.dtos.FeaturedProductDTO;
import com.onestopshop.entities.FeaturedProduct;

public interface FeaturedProductService {
	FeaturedProduct addFeaturedProduct(MultipartFile file, FeaturedProductDTO featuredProductDto) throws IOException;
	byte[] getFeaturedProduct(String fileName) throws IOException;
	List<FeaturedProduct> getAllFeaturedProducts() throws IOException;
	FeaturedProduct deleteFeaturedProduct(Long id);
	}
