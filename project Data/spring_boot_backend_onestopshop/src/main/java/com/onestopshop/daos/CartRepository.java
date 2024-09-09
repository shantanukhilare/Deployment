package com.onestopshop.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onestopshop.entities.Cart;
import com.onestopshop.entities.User;

public interface CartRepository extends JpaRepository<Cart, Long> {
    Optional<Cart> findByUser(User user);
}
