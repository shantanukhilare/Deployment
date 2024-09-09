package com.onestopshop.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "product_images")
public class ProductImage extends BaseEntity {
	
	@Column(name = "file_path")
	private String filePath;
	
	@Column(name="file_name",unique = true)
	private String fileName;
	
	@Column(name = "is_cover_image")
	private boolean cover;
	
	@ManyToOne
	private Product product;
}
