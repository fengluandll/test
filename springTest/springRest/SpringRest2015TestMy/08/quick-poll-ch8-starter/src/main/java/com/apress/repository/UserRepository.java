package com.apress.repository;

import com.apress.domain.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Allbts-IT on 9/08/2016.
 */
public interface UserRepository extends CrudRepository<User, Long> {
    public User findByUsername(String username);
}
