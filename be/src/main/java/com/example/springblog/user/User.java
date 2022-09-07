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

import org.hibernate.annotations.DynamicUpdate;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@DynamicUpdate // this udpates only relevant attributes of the entity during partial update
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Size(min = 2)
    @NotBlank(message = "Name is required")
    private String name;
    @Size(min = 2)
    @Column(nullable = false, unique = true)
    @NotBlank(message = "Username is required")
    private String username;
    @Column(nullable = false)
    @NotBlank(message = "Password is required")
    private String password;
    @Column(nullable = false, unique = true)
    @NotBlank(message = "Email is required")
    @Email(message = "Please enter a valid email")
    private String email;
    private int age;
    @NotBlank(message = "Role is required")
    private String role;
    @Column(columnDefinition = "boolean default true")
    private Boolean isActive;

    public User(String name, String username, String password, String email, int age, String role, boolean isActive) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.age = age;
        this.role = role;
        this.isActive = isActive;
    }
}