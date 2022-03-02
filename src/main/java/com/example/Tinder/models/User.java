package com.example.tinder.models;

import javax.persistence.*;


@Entity
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false )

    private Long id;
    private String nombre;
    private String apellido;
    private String correo;
    private String password;
    private Long edad;
    private String genero;
    private String descripcion;
    private String imagen;

    public Long getId() {
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido){
        this.apellido = apellido;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo){
        this.correo = correo;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public Long getEdad() {
        return edad;
    }

    public void setEdad(Long edad){
        this.edad = edad;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero){
        this.genero = genero;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion){
        this.descripcion = descripcion;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen){
        this.imagen = imagen;
    }

    public void setAll(User usuario){
        if(usuario.getEdad() != 0){
            this.setEdad(usuario.getEdad());
        }

        if(usuario.getGenero() != ""){
            this.setGenero(usuario.getGenero());
        }

        if(usuario.getDescripcion() != ""){
            this.setDescripcion(usuario.getDescripcion());
        }
    }

}
