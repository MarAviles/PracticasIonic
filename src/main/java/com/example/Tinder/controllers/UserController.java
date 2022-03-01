package com.example.tinder.controllers;

// import java.io.IOException;
// import java.nio.file.Files;
// import java.nio.file.Path;
// import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import com.example.tinder.models.User;
import com.example.tinder.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
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
        
        //@RequestParam("file") MultipartFile imagen
        // if(!imagen.isEmpty()) {
        //     Path directorioImagenes = Paths.get("src/assets");
        //     String rutaAbsoluta = directorioImagenes.toFile().getAbsolutePath();

        //     try {
        //         byte[] bytesImg = imagen.getBytes();
        //         Path rutaCompleta = Paths.get(rutaAbsoluta + "/"+ imagen.getOriginalFilename());
        //         Files.write(rutaCompleta, bytesImg);

        //         usuario.setImagen(imagen.getOriginalFilename());
                
        //     } catch (IOException e) {
        //         e.printStackTrace();
        //     }
            
        // }
        
        
        return UserService.guardar(usuario);
    }

    @PostMapping("login")
    public List<User> BuscarUsuario(@RequestParam("query") String query){
        var correo = UserService.Buscarporpalabra(query);
        return correo;
    }

}
