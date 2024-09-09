package com.onestopshop.dtos;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ProductWithCategoryNameDTO {
    private Long id;
    private String productName;
    private String description;
    private double price;
    private int quantity;
    private String categoryName;
}
