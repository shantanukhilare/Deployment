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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.onestopshop.dtos.FeaturedProductDTO;
import com.onestopshop.entities.FeaturedProduct;
import com.onestopshop.services.FeaturedProductService;


@RestController
@RequestMapping("/admin/featuredProducts")
@CrossOrigin(origins = "http://localhost:3000")
public class FeaturedProductController {

	@Autowired
	FeaturedProductService featuredProductService;

	@PostMapping
	public ResponseEntity<FeaturedProduct> addFeaturedProduct(@RequestParam("file") MultipartFile file,
			@RequestParam("title") String title, @RequestParam("description") String description) throws IOException {
		FeaturedProductDTO featuredProductDto = new FeaturedProductDTO();
		featuredProductDto.setTitle(title);
		featuredProductDto.setDescription(description);
		FeaturedProduct createdProduct = featuredProductService.addFeaturedProduct(file, featuredProductDto);
		return ResponseEntity.ok(createdProduct);
	}
	
	@GetMapping("/{fileName}")
	public ResponseEntity<?> getFeaturedProductImage (@PathVariable String fileName)  throws IOException  {
		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png")).body(featuredProductService.getFeaturedProduct(fileName));
	}
	
	@GetMapping()
	public ResponseEntity<?> getAllFeaturedProducts() throws IOException {
		return ResponseEntity.ok(featuredProductService.getAllFeaturedProducts());
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteFeaturedProduct(@PathVariable Long id){
		return ResponseEntity.ok(featuredProductService.deleteFeaturedProduct(id));
	}
	
	

}
