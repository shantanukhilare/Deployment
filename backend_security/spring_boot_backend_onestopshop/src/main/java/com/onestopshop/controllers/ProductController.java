package com.onestopshop.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.onestopshop.dtos.ProductDTO;
import com.onestopshop.dtos.ProductInventoryDTO;
import com.onestopshop.dtos.ProductUpdateDTO;
import com.onestopshop.entities.Product;
import com.onestopshop.services.ProductService;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/all")
    public ResponseEntity<List<Product>> getAllProducts() {
    	List<Product> allProducts = productService.getAllProducts();
    	System.out.println(allProducts);
        return ResponseEntity.ok(allProducts);
    }
    
    @GetMapping("/all/user/{userId}")
    public ResponseEntity<?> getByProductsUserId(@PathVariable Long userId){
    	return ResponseEntity.ok(productService.getProductsByUser(userId, false));
    }

    @GetMapping("/all/{id}")
    public ResponseEntity<?> getProductById(@PathVariable String id) {
    	Long productId=Long.parseLong(id);
        Optional<Product> productDTO = productService.getProductById(productId);
        return productDTO.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/admin-seller/{userId}")
    public ResponseEntity<?> saveProduct(@RequestBody ProductDTO productDTO,@PathVariable Long userId) {   	
        return ResponseEntity.status(HttpStatus.CREATED).body(productService.saveProduct(productDTO,userId));
    }
    
    @PutMapping("/admin-seller/delete/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id){
    	return ResponseEntity.status(HttpStatus.OK).body(productService.deleteProduct(id));
    }
    
    @PutMapping("/admin-seller/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Long id, @RequestBody ProductUpdateDTO productDTO) {

    	return ResponseEntity.ok(productService.updateProduct(id, productDTO));
    }
    
    @PutMapping("/seller")
    public ResponseEntity<?> updateInventory(ProductInventoryDTO dto){
    	return ResponseEntity.ok(productService.updateInventory(dto));
    }
    
    @GetMapping("/all/name/{name}")
    public ResponseEntity<?> getProductByProductName(@RequestParam String name){
    	return ResponseEntity.ok(productService.getProductByName(name));
    }
    public String getMethodName(@RequestParam String param) {
        return new String();
    }
}
