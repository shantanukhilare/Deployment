package com.onestopshop.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "products")
public class Product extends BaseEntity {

	@Column(name = "product_name")
	private String productName;

	@Column(name = "brand")
	private String brand;

	@Column(name = "price")
	private double price;

	@Column(name = "inventory")
	private int inventory;
	
	@Column(name = "is_deleted")
	private boolean isDeleted;

//  MANY TO ONE RELATION UNIDIRECTIONAL
	@ManyToOne
//  @JsonBackReference
	@JoinColumn(name = "category_id")
	private Category category;

	// ONE to ONE Relation UNIDIRECTION
	@OneToOne(cascade = { CascadeType.MERGE }, fetch = FetchType.EAGER)
	@JoinColumn(name = "specifications_id", referencedColumnName = "id")
	private Specification specification;

}
