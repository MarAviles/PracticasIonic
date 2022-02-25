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
    private Number edad;
    private String genero;
    private String descripcion;

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

    public Number getEdad() {
        return edad;
    }

    public void setEdad(Number edad){
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

    public void setDescripcio(String descripcion){
        this.descripcion = descripcion;
    }
}
