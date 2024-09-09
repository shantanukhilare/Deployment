package com.onestopshop.dtos;

import com.onestopshop.entities.Role;
import com.onestopshop.entities.User;

import lombok.Data;

@Data
public class UserDto {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private Role role;
    private String phoneNumber;
    
    public UserDto() {
		}

    public UserDto(User user) {
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.email = user.getEmail();
        this.password=user.getPassword();
        this.role = user.getRole();
        this.phoneNumber=user.getPhoneNumber();
    }
}
