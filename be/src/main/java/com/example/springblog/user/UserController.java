package com.example.springblog.user;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/users")
    public List<User> index() {
        return userService.index();
    }

    @GetMapping("/users/{id}")
    public Optional<User> show(@PathVariable int id) {
        return userService.show(id);
    }

    // @PostMapping("/user/search")
    // public List<User> search(@RequestBody Map<String, String> body){
    // String searchTerm = body.get("text");
    // return userRepository.findByTitleContainingOrContentContaining(searchTerm,
    // searchTerm);
    // }

    @PostMapping("/users")
    // public ResponseEntity<User> create(@Valid @RequestBody Map<String, String> body) {
    public ResponseEntity<User> create(@Valid @RequestBody User body) {
        return new ResponseEntity<User>(userService.create(body), HttpStatus.CREATED);
    }

    // @PutMapping("/user/{id}")
    // public User update(@PathVariable String id, @RequestBody Map<String, String>
    // body){
    // int userId = Integer.parseInt(id);
    // // getting user
    // User user = userRepository.findOne(userId);
    // user.setName(body.get("title"));
    // user.setCity(body.get("content"));
    // user.setAge(body.get("content"));
    // return userRepository.save(user);
    // }

    // @DeleteMapping("user/{id}")
    // public boolean delete(@PathVariable String id){
    // int userId = Integer.parseInt(id);
    // userRepository.delete(userId);
    // return true;
    // }

}