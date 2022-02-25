package com.example.tinder.controllers;

import java.util.ArrayList;

import com.example.tinder.models.User;
import com.example.tinder.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    UserService userService;


    @GetMapping()
    public ArrayList<User> getUser(){
        return userService.AllUsers();
    }

    @PostMapping()
    public String guardar(@RequestBody User usuario){
        return userService.guardar(usuario);
    }
}
