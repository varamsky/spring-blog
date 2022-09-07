package com.example.springblog.auth;

import lombok.Data;

@Data
public class AuthenticationResponse {
    private String jwt;
    private String jwtExpiration;
    private String tokenType;

    public AuthenticationResponse(String jwt, String jwtExpiration, String tokenType) {
        this.jwt = jwt;
        this.jwtExpiration = jwtExpiration;
        this.tokenType = tokenType;
    }
}