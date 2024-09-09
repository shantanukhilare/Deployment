package com.onestopshop.services;

import java.util.List;
import java.util.Optional;

import com.onestopshop.entities.Address;

public interface AddressService {
    Address addAddress(Address address);
    List<Address> getAllAddresses();
    Optional<Address> getAddressById(Long id);
    List<Address> getAddressByUserId(Long userId);
}
