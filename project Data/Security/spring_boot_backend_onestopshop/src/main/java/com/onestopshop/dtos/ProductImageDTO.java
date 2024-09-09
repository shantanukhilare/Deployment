package com.onestopshop.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductImageDTO {

	private String fileName;
	private String filePath;
	private boolean isCover;
	private Long productId;
}
