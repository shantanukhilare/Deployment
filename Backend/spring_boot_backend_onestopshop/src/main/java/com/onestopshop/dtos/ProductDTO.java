package com.onestopshop.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDTO {
    private String productName;
    private String brand;
    private double price;
    private int quantity;
    private Long categoryId;
    private Long specificationId;
}
