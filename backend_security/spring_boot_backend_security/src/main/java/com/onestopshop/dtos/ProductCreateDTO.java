package com.onestopshop.dtos;

import com.onestopshop.entities.Category;
import com.onestopshop.entities.Specification;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductCreateDTO {
    private String productName;
    private String description;
    private double price;
    private int quantity;
    private Category category;
    private Specification specification;
}
