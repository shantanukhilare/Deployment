package com.onestopshop.dtos;

import lombok.*;

@Data
public class ProductDTO {
    private String productName;
    private String brand;
    private double price;
    private int inventory;
    private Long categoryId;
    private Long specificationId;
}
