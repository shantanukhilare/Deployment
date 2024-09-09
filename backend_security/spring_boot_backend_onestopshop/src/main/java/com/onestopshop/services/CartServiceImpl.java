package com.onestopshop.services;

import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onestopshop.daos.AddressRepository;
import com.onestopshop.daos.CartRepository;
import com.onestopshop.daos.OrderRepository;
import com.onestopshop.daos.ProductRepository;
import com.onestopshop.daos.UserRepository;
import com.onestopshop.dtos.AddToCartDTO;
import com.onestopshop.entities.Address;
import com.onestopshop.entities.Cart;
import com.onestopshop.entities.CartProduct;
import com.onestopshop.entities.Order;
import com.onestopshop.entities.OrderItem;
import com.onestopshop.entities.Product;
import com.onestopshop.entities.Status;
import com.onestopshop.entities.User;
import com.onestopshop.exceptionhandling.ResourceNotFoundException;
@Transactional
@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private OrderRepository orderRepository;
    
    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private ProductRepository productRepository;
    
    @Autowired
    private UserRepository userRepository;

    @Override
    public Cart getCartByUser(Long userId) {
    	User user = userRepository.findById(userId)
        		.orElseThrow(() -> new ResourceNotFoundException("User ID Invalid"));
        return cartRepository.findByUser(user).orElseGet(() -> {
            Cart cart = new Cart();
            cart.setUser(user);
            return cartRepository.save(cart);
        });
    }

    @Override
    public Cart addProductToCart(Long productId, AddToCartDTO dto) {
    	Product product = productRepository.findById(productId)
        		.orElseThrow(() -> new ResourceNotFoundException("Product ID Invalid"));
    	
    	Cart cart = getCartByUser(dto.getUserId());
    	
    	CartProduct cartProduct = cart.getCartProducts()
            .stream()
            .filter(cp -> cp.getProduct().getId().equals(productId))
            .findFirst()
            .orElse(null);

        if (cartProduct != null) {
            cartProduct.setQuantity(cartProduct.getQuantity() + dto.getQuantity());
        } else {
            cart.addProduct(product, dto.getQuantity());
        }

        return cartRepository.save(cart);
    }

    @Override
    public Order purchaseAllProductsFromCart(Long userId, Long addressId) {
        Cart cart = getCartByUser(userId);
        
        User user = userRepository.findById(userId)
        		.orElseThrow(() -> new ResourceNotFoundException("User ID Invalid"));
        
        Set<CartProduct> cartProducts = cart.getCartProducts();
        
        Address address = addressRepository.findById(addressId)
        		.orElseThrow(() -> new ResourceNotFoundException("Address ID Invalid"));

        Order order = new Order();
        order.setUser(user);
        order.setStatus(Status.ORDERED);

        double totalAmount = 0;

        for (CartProduct cartProduct : cartProducts) {
            OrderItem orderItem = new OrderItem();
            orderItem.setProduct(cartProduct.getProduct());
            orderItem.setQuantity(cartProduct.getQuantity());
            orderItem.setTotalPrice(cartProduct.getProduct().getPrice() * cartProduct.getQuantity());
            order.addOrderItem(orderItem);

            totalAmount += cartProduct.getProduct().getPrice() * cartProduct.getQuantity();
        }

        order.setTotalAmount(totalAmount);
        order.setBillingAddress(address);

        cart.getCartProducts().clear();
        cartRepository.save(cart);
        return orderRepository.save(order);
    }
}
