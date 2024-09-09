package com.onestopshop.dtos;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.onestopshop.entities.Status;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class OrderDTO {

    @NotEmpty
    private Status status;

    @NotNull
    private Double totalAmount;

    @NotNull
    private Long userId;

    private Long addressId;
    
}
