package com.onestopshop.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.onestopshop.entities.Address;
import com.onestopshop.entities.User;

public interface AddressRepository extends JpaRepository<Address, Long> {
	List<Address> findByUser(User user);
	
}
