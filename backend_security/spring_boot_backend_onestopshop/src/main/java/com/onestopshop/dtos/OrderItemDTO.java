package com.onestopshop.dtos;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class OrderItemDTO {

//    @NotNull
    private Integer quantity;

//    @NotNull
    private Double total_price;

//    @NotNull
    private Long productId;

//    @NotNull
    private Long orderId;
}
