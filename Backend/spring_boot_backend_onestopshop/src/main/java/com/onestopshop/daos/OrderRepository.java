package com.onestopshop.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onestopshop.entities.Order;



public interface OrderRepository extends JpaRepository<Order, Long> {
}