package com.example.springblog.user;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;
    
    @Autowired
    PasswordEncoder passwordEncoder;

    protected List<User> getAllUsers() {
        return userRepository.findAll();
    }

    protected Optional<User> getUserById(int id) {
        return userRepository.findById(id);
    }

    protected ResponseEntity<?> createUser(User body) {
        String name = body.getName();
        String username = body.getUsername();
        String password = passwordEncoder.encode(body.getPassword()); // encoding the simple text password
        String email = body.getEmail();
        int age = body.getAge();
        String role = body.getRole();
        boolean isActive = body.getIsActive() == null ? true : body.getIsActive();

        boolean isRoleValid = false;
        for (UserRoles userRole : UserRoles.values()) {
            if (userRole.name().equalsIgnoreCase(role)) {
                isRoleValid = true;
                break;
            }
        }

        // TODO: find a better solution to this instead of using ResponseEntity<?>
        HashMap<String, String> errorMap = new HashMap<>();
        errorMap.put("error", "Please provide a valid role for the user");
        if (!isRoleValid)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMap);

        return new ResponseEntity<User>(userRepository.save(new User(name, username, password, email, age, role, isActive)), HttpStatus.CREATED);
    }
}
