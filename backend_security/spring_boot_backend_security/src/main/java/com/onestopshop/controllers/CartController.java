package com.onestopshop.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.onestopshop.dtos.AddToCartDTO;
import com.onestopshop.services.CartService;

@RestController
@RequestMapping("/buyer/cart")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

	@Autowired
	private CartService cartService;

	@PostMapping("/add/{productId}")
	public ResponseEntity<?> addProductToCart(@PathVariable Long productId, @RequestBody AddToCartDTO dto) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(cartService.addProductToCart(productId, dto));
	}

	@PostMapping("/purchase")
	public ResponseEntity<?> purchaseAllProducts(@RequestParam Long userId, @RequestParam Long addressId) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(cartService.purchaseAllProductsFromCart(userId, addressId));
	}

	@GetMapping("/user/{userId}")
	public ResponseEntity<?> showCart(@PathVariable Long userId) {
		return ResponseEntity.ok(cartService.getCartByUser(userId));
	}
}
