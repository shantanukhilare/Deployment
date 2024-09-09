package com.onestopshop.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.onestopshop.dtos.AddToCartDTO;
import com.onestopshop.entities.Cart;

@SpringBootTest
public class TestAddToCart {

	@Autowired
	private CartService cartService;
	
	@Test
	void testAddProductToCart() {
		 AddToCartDTO dto=new AddToCartDTO(5l,9);		
		Cart cart=cartService.addProductToCart(1l, dto);		
		assertEquals(5l, cart.getUser().getId());
	}
}
