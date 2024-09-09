package com.onestopshop.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FeaturedProductResponseDTO {
	private String title;

	private String description;

	private String filePath;

	private String fileName;

	private Long id;
}
