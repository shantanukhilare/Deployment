package com.onestopshop.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@Table(name = "categories")
@ToString
public class Category extends BaseEntity {

    @Column(name = "name", nullable = false, unique = true)
    private String name;
    
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category", orphanRemoval = true, fetch = FetchType.EAGER)
    @JsonManagedReference
    @ToString.Exclude
    private List<Product> categoriesList;
    
    public void addProduct(Product product) {
        this.categoriesList.add(product);
        product.setCategory(this);
    }
}
