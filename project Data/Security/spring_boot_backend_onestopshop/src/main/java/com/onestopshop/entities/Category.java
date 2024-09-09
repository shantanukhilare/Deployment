package com.onestopshop.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "categories")
public class Category extends BaseEntity {

    @Column(name = "name", nullable = false, unique = true)
    private String name;
     
//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category", orphanRemoval = true, fetch = FetchType.EAGER)
//    @JsonManagedReference
//    @ToString.Exclude
//    private List<Product> categoriesList;
//    
//    public void addProduct(Product product) {
//        this.categoriesList.add(product);
//        product.setCategory(this);
//    }
}
