package com.onestopshop.dtos;

import lombok.Data;

@Data
public class AddToCartDTO {

	private Long userId;
	private int quantity;
}
