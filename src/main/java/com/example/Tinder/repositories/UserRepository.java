package com.example.tinder.repositories;

import com.example.tinder.models.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Long> {
    
}
