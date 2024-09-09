package com.onestopshop.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.onestopshop.daos.AddressRepository;
import com.onestopshop.daos.OrderRepository;
import com.onestopshop.daos.UserRepository;
import com.onestopshop.dtos.OrderDTO;
import com.onestopshop.entities.Address;
import com.onestopshop.entities.Order;
import com.onestopshop.entities.User;
import com.onestopshop.exceptionhandling.ResourceNotFoundException;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderRepository orderDao;
	@Autowired
	private AddressRepository addressRepository;

	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private UserRepository userDao;

	@Override
	public Order createOrder(OrderDTO dto) {

		User user = userDao.findById(dto.getUserId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid ID"));
		Address address = addressRepository.findById(dto.getAddressId())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid ID"));
		Order order = modelMapper.map(dto, Order.class);
		order.setUser(user);
		order.setBillingAddress(address);
		return orderDao.save(order);
	}

	@Override
	public Order getOrderById(Long id) {
		return orderDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid ID"));
	}

	@Override
	public List<Order> getAllOrders() {

		return orderDao.findAll();
	}

	public List<Order> getOrdersByUserId(Long userId) {
		User user = userDao.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid ID"));
		return orderDao.findByUser(user);

	}

}
