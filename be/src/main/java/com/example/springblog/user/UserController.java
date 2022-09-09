package com.example.springblog.user;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Value;

import com.example.springblog.auth.AuthenticationRequest;
import com.example.springblog.auth.AuthenticationResponse;
import com.example.springblog.auth.MyUserDetailsService;
import com.example.springblog.util.JwtUtil;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserService userService;

    @Autowired
    MyUserDetailsService userDetailsService;

    @Autowired
    JwtUtil jwtUtil;

    @Value("${example.app.jwtExpirationMs}")
    private int JWT_EXPIRATION_MS;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        log.info("this is login HERE");
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getUsername(), authenticationRequest.getPassword()));
        } catch (BadCredentialsException ex) {
            throw new Exception("Incorrect username or password", ex);
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt, Integer.toString(JWT_EXPIRATION_MS), "Bearer", userDetails.getUsername()));
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        log.info("/users Get all users");
        return userService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<?> getUserById(@PathVariable int id) {
        log.info("/users/{id} Get user by id");
        return userService.getUserById(id);
    }

    @PostMapping("/users")
    public ResponseEntity<?> createUser(@Valid @RequestBody User body) {
        return userService.createUser(body);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<?> update(@PathVariable int id, @RequestBody Map<String, String> body){
        return userService.updateUserById(id, body);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUserById(@PathVariable int id) {
        log.info("controller delete user by id ");
        return userService.deleteUserById(id);
    }

}