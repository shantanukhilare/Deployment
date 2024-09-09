package com.onestopshop.services;

import java.util.List;
import java.util.Optional;

import com.onestopshop.dtos.LoginDTO;
import com.onestopshop.dtos.UserDto;
import com.onestopshop.entities.User;

public interface UserService {
	User addUser(UserDto dto);
    Optional<User> getUserById(Long id);
   List<User> getAllUsers();
   Optional<User> login(LoginDTO loginDTO);
}
