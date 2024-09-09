package com.onestopshop.services;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.onestopshop.daos.ProductImageRepository;
import com.onestopshop.daos.ProductRepository;
import com.onestopshop.dtos.ApiResponse;
import com.onestopshop.dtos.ProductImageDTO;
import com.onestopshop.entities.Product;
import com.onestopshop.entities.ProductImage;
import com.onestopshop.exceptionhandling.ResourceNotFoundException;

@Service
@Transactional
public class ProductImageServiceImpl implements ProductImageService {

//	private final String PATH="E:\\PG-DAC\\PROJECT\\Backend\\spring_boot_backend_onestopshop\\src\\main\\resources\\static\\productImages\\";
	private final String PATH = "E:\\PG-DAC\\MyGitData\\project\\Backend\\spring_boot_backend_onestopshop\\src\\main\\resources\\static\\Images\\productImages\\";

	public ProductImageServiceImpl() {
		File directory = new File(PATH);
		if (!directory.exists()) {
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
	public ApiResponse addProductImage(MultipartFile file, ProductImageDTO dto) throws IOException {
	    Product product = productRepository.findById(dto.getProductId())
	            .orElseThrow(() -> new ResourceNotFoundException("Invalid ID"));

	    // Check if there's already a cover image for this product
	    List<ProductImage> images = productImageRepository.findByProduct(product);
	    boolean hasCoverImage = images.stream().anyMatch(ProductImage::isCover);

	    // Save the new image
	    String uploadDir = PATH + file.getOriginalFilename();
	    File destinationFile = new File(uploadDir);
	    file.transferTo(destinationFile);

	    ProductImage productImage = modelMapper.map(dto, ProductImage.class);
	    productImage.setProduct(product);
	    productImage.setFilePath(uploadDir);
	    productImage.setFileName(file.getOriginalFilename());

	    if (dto.isCover() && hasCoverImage) {
	        // If the new image is a cover image and there's already a cover, you might want to update or handle it
	        ProductImage existingCoverImage = images.stream()
	                .filter(ProductImage::isCover)
	                .findFirst()
	                .orElse(null);

	        if (existingCoverImage != null) {
	            // Optionally, you can remove or update the existing cover image here
	            // Example: existingCoverImage.setCover(false);
	            // productImageRepository.save(existingCoverImage);
	        }
	    }

	    productImageRepository.save(productImage);

	    return new ApiResponse("Image Added Successfully!");
	}


	@Override
	public byte[] getProductImageByFileName(String fileName) throws IOException {
		ProductImage image = productImageRepository.findByFileName(fileName);
		return Files.readAllBytes(new File(image.getFilePath()).toPath());
	}

	@Override
	public List<ProductImage> getAllProductImages() throws IOException {
		List<ProductImage> productImages = productImageRepository.findAll();
		return productImages.stream().map(image -> modelMapper.map(image, ProductImage.class))
				.collect(Collectors.toList());
	}

	@Override
	public List<ProductImage> getImageByProductId(Long productId) throws IOException {
		Product product = productRepository.findById(productId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid ID"));
		List<ProductImage> productImages = productImageRepository.findByProduct(product);
		return productImages.stream().map(image -> modelMapper.map(image, ProductImage.class))
				.collect(Collectors.toList());
	}

	@Override
	public byte[] getCoverImageByProductId(Long productId) throws IOException {
		try {
			Product product = productRepository.findById(productId)
					.orElseThrow(() -> new ResourceNotFoundException("not found for product ID: " + productId));
			ProductImage image = productImageRepository.findByProductAndCover(product, true);
			return Files.readAllBytes(new File(image.getFilePath()).toPath());
		} catch (Exception ex) {
			System.out.println(ex);
			return Files.readAllBytes(new File(
					"E:\\PG-DAC\\MyGitData\\project\\Backend\\spring_boot_backend_onestopshop\\src\\main\\resources\\static\\Images\\productImages\\DummyImage.jpeg")
					.toPath());
		}
	}

}
