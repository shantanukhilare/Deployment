package com.onestopshop.services;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.onestopshop.daos.ProductImageRepository;
import com.onestopshop.daos.ProductRepository;
import com.onestopshop.dtos.ProductImageDTO;
import com.onestopshop.entities.Product;
import com.onestopshop.entities.ProductImage;
import com.onestopshop.exceptionhandling.ResourceNotFoundException;

@Service
@Transactional
public class ProductImageServiceImpl implements ProductImageService{
	
	private final String PATH="E:\\PG-DAC\\PROJECT\\Backend\\spring_boot_backend_onestopshop\\src\\main\\resources\\static\\productImages";
	
	public ProductImageServiceImpl() {
	 File directory=new File(PATH);
	 if(!directory.exists()) {
		 directory.mkdir();
	 }
	}

	@Autowired
	private ProductImageRepository productImageRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public ProductImage addProductImage(MultipartFile file , ProductImageDTO dto) throws IOException {
		Product product=productRepository.findById(dto.getProductId())
				.orElseThrow(()->new ResourceNotFoundException("Invalid ID"));
				
		String uploadDir=PATH+file.getOriginalFilename();
		file.transferTo(new File(uploadDir));
		
		ProductImage productImage=modelMapper.map(dto, ProductImage.class);
		productImage.setProduct(product);
		productImage.setFilePath(uploadDir);
		productImage.setFileName(file.getOriginalFilename());
		
		return productImageRepository.save(productImage);
	}

	@Override
	public byte[] getProductImageByFileName(String fileName) throws IOException {
		ProductImage image= productImageRepository.findByFileName(fileName);
		return Files.readAllBytes(new File(image.getFilePath()).toPath());
	}

	@Override
	public List<ProductImage> getAllProductImage() {
		return productImageRepository.findAll();
	}
	
}
