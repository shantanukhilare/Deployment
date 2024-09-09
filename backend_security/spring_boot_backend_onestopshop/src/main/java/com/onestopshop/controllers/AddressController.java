package com.onestopshop.controllers;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onestopshop.dtos.AddressDTO;
import com.onestopshop.dtos.AddressResponseDTO;
import com.onestopshop.entities.Address;
import com.onestopshop.entities.User;
import com.onestopshop.services.AddressService;
import com.onestopshop.services.UserService;

@RestController
@RequestMapping("/buyer/address")
@CrossOrigin(origins = "*")
public class AddressController {
	
    @Autowired
    private AddressService addressService;

    @Autowired
    private UserService userService;
    
    @PostMapping
    public ResponseEntity<Address> addAddress(@RequestBody AddressDTO addressDTO) {
        Optional<User> userOptional = userService.getUserById(addressDTO.getUserId());
        if (userOptional.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        Address address = new Address();
        address.setUser(userOptional.get());
        address.setAddressLine1(addressDTO.getAddressLine1());
        address.setAddressLine2(addressDTO.getAddressLine2());
        address.setCity(addressDTO.getCity());
        address.setState(addressDTO.getState());
        address.setZipCode(addressDTO.getZipCode());
        address.setCountry(addressDTO.getCountry());

        Address savedAddress = addressService.addAddress(address);
        return new ResponseEntity<>(savedAddress, HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<AddressResponseDTO>> getAllAddresses() {
        List<Address> addresses = addressService.getAllAddresses();
        List<AddressResponseDTO> addressDTOs = addresses.stream()
            .map(address -> new AddressResponseDTO(
                address.getId(),
                address.getUser() != null ? address.getUser().getId() : null,
                address.getAddressLine1(),
                address.getAddressLine2(),
                address.getCity(),
                address.getState(),
                address.getZipCode(),
                address.getCountry()
            ))
            .collect(Collectors.toList());
        return new ResponseEntity<>(addressDTOs, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<AddressResponseDTO> getAddressById(@PathVariable Long id) {
        Optional<Address> address = addressService.getAddressById(id);
        if (address.isPresent()) {
            Address addr = address.get();
            AddressResponseDTO responseDTO = new AddressResponseDTO(
                addr.getId(),
                addr.getUser() != null ? addr.getUser().getId() : null,
                addr.getAddressLine1(),
                addr.getAddressLine2(),
                addr.getCity(),
                addr.getState(),
                addr.getZipCode(),
                addr.getCountry()
            );
            return new ResponseEntity<>(responseDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @GetMapping("/user/{userId}")    
    public ResponseEntity<?> getAddressByUserId(@PathVariable Long userId) {
      return ResponseEntity.ok(addressService.getAddressByUserId(userId));      
    }
    
    
    
}
