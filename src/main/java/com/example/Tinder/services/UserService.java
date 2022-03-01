package com.example.tinder.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.tinder.models.User;
import com.example.tinder.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository UserRepository;

    public ArrayList<User> AllUsers(){
        return (ArrayList<User>) UserRepository.findAll();
    }

    public String guardar(User user){
        UserRepository.save(user);
        return "Guardado correctamente!";
    }

    public Optional<User> Obtenerid(Long id){
        return UserRepository.findById(id);
    }

    public List<User> Buscarporpalabra(String query){
        List<User> nombre= UserRepository.EncontrarPorPalabra(query);
        return nombre;
    }


}
