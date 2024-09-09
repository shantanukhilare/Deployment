package com.onestopshop.dtos;

import java.util.List;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderDTO {

    @NotEmpty
    private String status;

    @NotNull
    private Double totalAmount;

    @NotNull
    private Long userId;

    private List<OrderItemDTO> orderItems;
}
