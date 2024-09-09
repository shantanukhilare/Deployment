package com.onestopshop.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.onestopshop.dtos.ApiResponse;
import com.onestopshop.dtos.FeaturedProductDTO;
import com.onestopshop.services.FeaturedProductService;


@RestController
@CrossOrigin(origins = "*")
public class FeaturedProductController {

	@Autowired
	FeaturedProductService featuredProductService;

	@PostMapping("/admin/featuredProducts")
	public ResponseEntity<?> addFeaturedProduct(@RequestParam("file") MultipartFile file,
			@RequestParam("title") String title, @RequestParam("description") String description) throws IOException {
		try {
		FeaturedProductDTO featuredProductDto = new FeaturedProductDTO();
		featuredProductDto.setTitle(title);
		featuredProductDto.setDescription(description);
		ApiResponse createdProduct = featuredProductService.addFeaturedProduct(file, featuredProductDto);
		return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
		}catch(Exception e) {
			System.out.println(e.getMessage());
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e);
		}
	}
	
	@GetMapping("/all/featureProducts/{fileName}")
	public ResponseEntity<?> getFeaturedProductImage (@PathVariable String fileName)  throws IOException  {
		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png")).body(featuredProductService.getFeaturedProduct(fileName));
	}
	
	@GetMapping("/all/featuredProducts")
	public ResponseEntity<?> getAllFeaturedProducts() throws IOException {
		return ResponseEntity.ok(featuredProductService.getAllFeaturedProducts());
	}
	
	@DeleteMapping("/admin/featureProducts/{id}")
	public ResponseEntity<?> deleteFeaturedProduct(@PathVariable Long id){
		return ResponseEntity.ok(featuredProductService.deleteFeaturedProduct(id));
	}
	
	

}
