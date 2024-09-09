package com.onestopshop.services;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onestopshop.daos.OrderItemRepository;
import com.onestopshop.daos.OrderRepository;
import com.onestopshop.daos.ProductRepository;
import com.onestopshop.dtos.OrderItemDTO;
import com.onestopshop.dtos.ProductInventoryDTO;
import com.onestopshop.entities.Order;
import com.onestopshop.entities.OrderItem;
import com.onestopshop.entities.Product;
import com.onestopshop.exceptionhandling.ResourceNotFoundException;

@Service
@Transactional
public class OrderItemServiceImpl implements OrderItemService{

	@Autowired
	private OrderItemRepository orderItemRepository;

	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private ProductService productService;
	

	 @Override
	    public OrderItem saveOrderItem(OrderItemDTO dto) {
	        Product product = productRepository.findById(dto.getProductId())
	                .orElseThrow(() -> new ResourceNotFoundException("Product not found"));

	        Order order = orderRepository.findById(dto.getOrderId())
	                .orElseThrow(() -> new ResourceNotFoundException("Order not found"));

	        OrderItem orderItem = modelMapper.map(dto, OrderItem.class);
	        orderItem.setProduct(product);
	        order.addOrderItem(orderItem);
	        
	        ProductInventoryDTO inventoryDTO=new ProductInventoryDTO();
	        inventoryDTO.setProductId(dto.getProductId());
	        inventoryDTO.setQuantity(dto.getQuantity());
	        productService.updateInventory(inventoryDTO);
	        return orderItemRepository.save(orderItem);
	    }
	
	@Override
	public List<OrderItem> getAllOrderItems() {		
		return orderItemRepository.findAll();
	}


	@Override
	public OrderItem getOrderItemById(Long id) {
		return orderItemRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid ID"));
	}


	
}
