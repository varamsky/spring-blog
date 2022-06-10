package com.example.springblog.user;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    protected List<User> index() {
        return userRepository.findAll();
    }

    protected Optional<User> show(int id) {
        return userRepository.findById(id);
    }

    // protected User create(Map<String, String> body) {
    protected User create(User body) {
        String name = body.getName();
        String email = body.getEmail();
        // int age = Integer.parseInt(body.get("age"));
        int age = body.getAge();
        String role = body.getRole();
        return userRepository.save(new User(name, email, age, role));
    }
}
