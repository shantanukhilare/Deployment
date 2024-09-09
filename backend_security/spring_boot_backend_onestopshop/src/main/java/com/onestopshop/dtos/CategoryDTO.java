package com.onestopshop.dtos;

import lombok.Data;

@Data
public class CategoryDTO {
    private String name;

    // No-argument constructor (Lombok should generate this)
    public CategoryDTO() {
    }

    // Parameterized constructor for convenience
    public CategoryDTO(String name) {
        this.name = name;
    }
}


