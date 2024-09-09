package com.onestopshop.daos;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.onestopshop.entities.User;

@SpringBootTest
public class TestUserDao {

    @Autowired
    private UserRepository userRepository;

    @Test
    void testFindUserByEmail() {
        Optional<User> userOptional = userRepository.findByEmail("swapnil@gmail.com");
        
        //assertTrue(userOptional.isPresent(), "User should be present");

        User user = userOptional.get();
        assertEquals("shantanu", user.getFirstName());
    }
}
