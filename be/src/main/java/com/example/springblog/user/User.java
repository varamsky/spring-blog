package com.example.springblog.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
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
    @Size(min = 2)
    @NotBlank(message = "Name is required")
    private String name;
    @Column(nullable = false, unique = true)
    @NotBlank(message = "Email is required")
    @Email(message = "Please enter a valid email")
    private String email;
    private int age;
    @NotBlank(message = "Role is required")
    private String role;

    public User(String name, String email, int age, String role) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.role = role;
    }
}
