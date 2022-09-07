package com.example.springblog.auth;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class AuthenticationRequest {
    private String username;
    private String password;
}