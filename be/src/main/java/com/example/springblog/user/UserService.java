package com.example.springblog.user;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    protected List<User> getAllUsers() {
        return userRepository.findAll();
    }

    protected ResponseEntity<?> getUserById(int id) {
        Optional<User> user = userRepository.findById(id);

//        if (user.isEmpty()) {
        if (!user.isPresent()) {
            HashMap<String, String> errorMap = new HashMap<>();
            errorMap.put("error", "User not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMap);
        }

        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

    protected ResponseEntity<?> createUser(User body) {
        String name = body.getName();
        String username = body.getUsername();
        String password = passwordEncoder.encode(body.getPassword()); // encoding the simple text password
        String email = body.getEmail();
        int age = body.getAge();
        String role = body.getRole();
        boolean isActive = body.getIsActive() == null || body.getIsActive();

        boolean isRoleValid = false;
        for (UserRoles userRole : UserRoles.values()) {
            if (userRole.name().equalsIgnoreCase(role)) {
                isRoleValid = true;
                break;
            }
        }

        // TODO: handle exceptions for duplicate username or email problems
        // TODO: have a common error message syntax for all responses(also for the in-built responses)!

        // TODO: find a better solution to this instead of using ResponseEntity<?>
        HashMap<String, String> errorMap = new HashMap<>();
        errorMap.put("error", "Please provide a valid role for the user");
        if (!isRoleValid)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMap);

        return new ResponseEntity<User>(
                userRepository.save(new User(name, username, password, email, age, role, isActive)),
                HttpStatus.CREATED);
    }

    protected ResponseEntity<?> updateUserById(int id, Map<String, String> body) {
        Optional<User> user = userRepository.findById(id);
//        if (user.isEmpty()) {
//            HashMap<String, String> errorMap = new HashMap<>();
//            errorMap.put("error", "User not found");
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMap);
//        }

        // TODO: look for better ways to do update rather than checking for each attribute is present or null!
        if (body.get("name") != null)
            user.get().setName(body.get("name"));
        if (body.get("role") != null)
            user.get().setRole(body.get("role"));
        // TODO: check for valid role before update
        return new ResponseEntity<User>(userRepository.save(user.get()), HttpStatus.OK);
    }

    protected ResponseEntity<?> deleteUserById(int id) {
        log.info("service delete user by id");

        try {
            return new ResponseEntity<User>(userRepository.deleteById(id), HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            HashMap<String, String> errorMap = new HashMap<>();
            errorMap.put("error", "User not found");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMap);
        }
    }
}