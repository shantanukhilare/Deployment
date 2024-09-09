package com.onestopshop.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onestopshop.daos.AddressRepository;
import com.onestopshop.daos.UserRepository;
import com.onestopshop.entities.Address;
import com.onestopshop.entities.User;
import com.onestopshop.exceptionhandling.ResourceNotFoundException;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserRepository userRepository;
    
    @Override
    public Address addAddress(Address address) {
        return addressRepository.save(address);
    }

    @Override
    public List<Address> getAllAddresses() {
        return addressRepository.findAll();
    }

    @Override
    public Optional<Address> getAddressById(Long id) {
        return addressRepository.findById(id);
    }
       
    public List<Address> getAddressByUserId(Long userId) {    	
    	User user=userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("Address not found..."));
    	return addressRepository.findByUser(user);
    }
}
