package com.onestopshop.dtos;

import com.onestopshop.entities.Category;
import com.onestopshop.entities.Specification;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductCreateDTO {
    private String productName;
    private String description;
    private double price;
    private int quantity;
    private Category category;
    private Specification specification;
}
