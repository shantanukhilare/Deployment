package com.onestopshop.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class AddToCartDTO {

	private Long userId;
	private int quantity;
	
	public AddToCartDTO(Long userId, int quantity) {
		super();
		this.userId = userId;
		this.quantity = quantity;
	}
	
	
}
