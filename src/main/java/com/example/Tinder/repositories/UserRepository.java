package com.example.tinder.repositories;

import java.util.List;

import com.example.tinder.models.User;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends CrudRepository<User,Long> {
    
    @Query(value = "select * from user where user.correo like %:keyword%", nativeQuery = true)
    List<User> EncontrarPorPalabra(@Param("keyword") String keyword);
}
