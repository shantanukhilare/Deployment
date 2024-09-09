package com.onestopshop.dtos;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ProductUpdateDTO {
    private String productName;
    private String brand;
    private double price;
    private int quantity;
    private Long categoryId;
    private Long specificationId;
}
