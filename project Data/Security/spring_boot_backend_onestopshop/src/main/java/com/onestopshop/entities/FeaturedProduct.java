package com.onestopshop.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "featured_products")
public class FeaturedProduct extends BaseEntity{
	
	@Column(name = "file_path")
	private String filePath;
	
	@Column(name="file_name",unique = true)
	private String fileName;
	
	private String title;
	
	private String description;
}
