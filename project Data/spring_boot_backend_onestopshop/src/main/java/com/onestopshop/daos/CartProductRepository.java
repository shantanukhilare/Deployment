package com.onestopshop.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onestopshop.entities.CartProduct;

public interface CartProductRepository extends JpaRepository<CartProduct, Long> {

}
