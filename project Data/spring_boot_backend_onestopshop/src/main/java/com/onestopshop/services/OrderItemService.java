package com.onestopshop.services;

import java.util.List;

import com.onestopshop.dtos.OrderItemDTO;
import com.onestopshop.entities.OrderItem;

public interface OrderItemService {

	List<OrderItem> getAllOrderItems();
	OrderItem saveOrderItem(OrderItemDTO dto) ;
	OrderItem getOrderItemById (Long id);
}
