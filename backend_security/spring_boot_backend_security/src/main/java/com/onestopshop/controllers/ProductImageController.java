package com.onestopshop.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.onestopshop.dtos.ProductImageDTO;
import com.onestopshop.services.ProductImageService;

@RestController
@RequestMapping("/api/productImage")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductImageController {

	@Autowired
	private ProductImageService productImageService;

	@PostMapping("/{productId}")
	public ResponseEntity<?> addProductImage(@RequestParam("file") MultipartFile file, @RequestParam boolean isCover,
			@PathVariable Long productId) throws IOException {
		ProductImageDTO dto = new ProductImageDTO();
		dto.setCover(isCover);
		dto.setProductId(productId);

		return ResponseEntity.status(HttpStatus.CREATED).body(productImageService.addProductImage(file, dto));
	}

	@GetMapping("/{fileName}")
	public ResponseEntity<?> getImageByFileName(@PathVariable String fileName) throws IOException {
		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png"))
				.body(productImageService.getProductImageByFileName(fileName));
	}

	@GetMapping("/all")
	public ResponseEntity<?> getAllProductImages() throws IOException {
		return ResponseEntity.ok(productImageService.getAllProductImages());
	}

	@GetMapping("/all/{id}")
	public ResponseEntity<?> getImageByProductId(@PathVariable Long id) throws IOException {
		return ResponseEntity.ok(productImageService.getImageByProductId(id));
	}

	@GetMapping("/cover/{productId}")
	public ResponseEntity<byte[]> getCoverImageByProductId(@PathVariable Long productId) throws IOException {
		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.IMAGE_JPEG)
				.body(productImageService.getCoverImageByProductId(productId));
	}

}
