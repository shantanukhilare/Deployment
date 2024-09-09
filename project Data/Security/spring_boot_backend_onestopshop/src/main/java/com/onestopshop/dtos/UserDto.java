package com.onestopshop.dtos;

import com.onestopshop.entities.Role;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto {

    private String firstName;
    
    private String lastName;

    private String email;
    
    private String password;
    
    private String phoneNumber;    
    
    private Role role;

}
