package com.onestopshop.services;

import com.onestopshop.dtos.AddToCartDTO;
import com.onestopshop.entities.Cart;
import com.onestopshop.entities.Order;

public interface CartService {
	Cart getCartByUser(Long userId);

	Cart addProductToCart(Long productId,AddToCartDTO dto);
	
	Order purchaseAllProductsFromCart(Long userId,Long addressId) ;

//	Cart getAllCartItems(Long userId);
}
