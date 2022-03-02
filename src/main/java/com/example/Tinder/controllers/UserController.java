package com.example.tinder.controllers;

// import java.io.IOException;
// import java.nio.file.Files;
// import java.nio.file.Path;
// import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.tinder.models.User;
import com.example.tinder.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
// import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    UserService UserService;

    @GetMapping()
    public ArrayList<User> getUser(){
        return UserService.AllUsers();
    }

    @PostMapping("/save")
    public String guardar(@RequestBody User usuario){
        return UserService.guardar(usuario);
    }

    @PostMapping("login")
    public List<User> BuscarUsuario(@RequestParam("query") String query){
        var correo = UserService.Buscarporpalabra(query);
        return correo;
    }

    @GetMapping("/{id}")
    public Optional<User> obtenerUsuario(@PathVariable("id") Long id){
        return UserService.Obtenerid(id);
    }

    @PutMapping("/editar/{id}")
    public void editarUser(@PathVariable("id") Long id, @RequestBody User usuario){
        UserService.editarUser(id, usuario);
    }

    @DeleteMapping("/eliminar/{id}")
    public String eliminarPorId(@PathVariable("id") Long id){
       return UserService.eliminarUsuario(id);
    }

}
