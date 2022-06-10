package com.example.springblog.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotEmpty(message = "Name is required")
    @Size(min = 2)
    private String name;
    @Column(nullable = false, unique = true)
    // @NotEmpty(message = "Email is required")
    // @Email(message = "Please enter a valid email")
    private String email;
    private int age;
    @NotEmpty(message = "Role is required")
    private String role;

    public User(String name, String email, int age, String role){
        this.name = name;
        this.email = email;
        this.age = age;
        this.role = role;
    }
}
