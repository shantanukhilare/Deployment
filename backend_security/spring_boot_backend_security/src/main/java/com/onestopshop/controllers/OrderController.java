package com.onestopshop.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onestopshop.dtos.OrderDTO;
import com.onestopshop.entities.Order;
import com.onestopshop.services.OrderService;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {
	@Autowired
	private OrderService orderService;

	@GetMapping
	public ResponseEntity<?> getAllOrders() {
		return ResponseEntity.ok(orderService.getAllOrders());
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getOrderById(@PathVariable Long id) {
		return ResponseEntity.ok(orderService.getOrderById(id));
	}

	@PostMapping()
	public ResponseEntity<?> SaveOrder(@RequestBody OrderDTO dto) {
		try {
			System.out.println(dto);
			Order orderSaved=orderService.createOrder(dto);
			System.out.println(orderSaved);
			return ResponseEntity.status(HttpStatus.CREATED).body(orderSaved);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e);
		}
	}
	
	@GetMapping("/user/{userId}")
	public ResponseEntity<?> getOrdersByUserId(@PathVariable Long userId){
		return ResponseEntity.ok(orderService.getOrdersByUserId(userId));
	}

}
