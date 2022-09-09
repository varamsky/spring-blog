package com.example.springblog.auth;

import lombok.Data;

@Data
public class AuthenticationResponse {
    private String token;
    private String expires_in;
    private String token_type;
    private String user;

    public AuthenticationResponse(String token, String expires_in, String token_type, String username) {
        this.token = token;
        this.expires_in = expires_in;
        this.token_type = token_type;
        this.user = username;
    }
}