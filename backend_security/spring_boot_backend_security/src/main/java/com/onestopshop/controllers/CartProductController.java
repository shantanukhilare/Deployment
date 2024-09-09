package com.onestopshop.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onestopshop.services.CartService;

@RestController
@RequestMapping("/buyer/cartItems")
public class CartProductController {
	
	@Autowired
	private CartService cartService;
	
//	@GetMapping
//	public ResponseEntity<?> getAllCartProducts(){
//		
//	}

}
