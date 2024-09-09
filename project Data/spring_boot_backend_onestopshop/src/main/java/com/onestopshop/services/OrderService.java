package com.onestopshop.services;

import java.util.List;

import com.onestopshop.dtos.OrderDTO;
import com.onestopshop.entities.Order;

public interface OrderService {
	Order createOrder(OrderDTO orderDTO);

	Order getOrderById(Long id);

	List<Order> getAllOrders();

	List<Order> getOrdersByUserId(Long userId);
}
