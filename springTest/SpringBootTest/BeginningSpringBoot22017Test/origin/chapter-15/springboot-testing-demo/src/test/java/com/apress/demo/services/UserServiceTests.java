package com.apress.demo.services;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@ContextConfiguration
public class UserServiceTests {
    @Autowired
    UserService userService;

    @Test
    public void should_load_all_users() {

        List<User> users = userService.getAllUsers();

        assertNotNull(users);

        assertEquals(10, users.size());
    }
}
