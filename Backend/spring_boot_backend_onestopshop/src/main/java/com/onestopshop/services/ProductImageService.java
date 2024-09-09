package com.onestopshop.services;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.onestopshop.dtos.ProductImageDTO;
import com.onestopshop.entities.ProductImage;

public interface ProductImageService {
	ProductImage addProductImage(MultipartFile file , ProductImageDTO dto) throws IOException;
	byte[] getProductImageByFileName(String fileName) throws IOException ;
	List<ProductImage> getAllProductImage();
	
}
