package com.onestopshop.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@Table(name = "products")
@ToString
public class Product extends BaseEntity {

    @Column(name = "product_name")
    private String productName;

    @Column(name = "brand")
    private String brand;

    @Column(name = "price")
    private double price;

    @Column(name = "quantity")
    private int quantity;

    //MANY TO ONE RELATION BI-DIRECTION
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonBackReference
    @JoinColumn(name = "category_id")
    private Category category;
    
    //ONE to ONE Relation UNIDIRECTION
    @OneToOne(cascade = { CascadeType.MERGE}, fetch = FetchType.EAGER)
    @JoinColumn(name = "specifications_id", referencedColumnName = "id")
    private Specification specification;
    
}
