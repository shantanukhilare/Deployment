package com.onestopshop.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onestopshop.entities.Order;
import com.onestopshop.entities.User;

public interface OrderRepository extends JpaRepository<Order, Long> {
	List<Order> findByUser(User user);
}