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

import com.onestopshop.dtos.OrderItemDTO;
import com.onestopshop.services.OrderItemService;

@RestController
@RequestMapping("/api/orderItems")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderItemController {

	@Autowired
	private OrderItemService orderItemService;
	
	@PostMapping
	public ResponseEntity<?> addOrderItems(@RequestBody OrderItemDTO dto){		
		return ResponseEntity.status(HttpStatus.CREATED).body(orderItemService.saveOrderItem(dto));
	}
	
	@GetMapping
	public ResponseEntity<?> getAllOrderItems(){
		return ResponseEntity.ok(orderItemService.getAllOrderItems());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getOrderItemsById(@PathVariable Long id){
		return ResponseEntity.ok(orderItemService.getAllOrderItems());
	}
}
