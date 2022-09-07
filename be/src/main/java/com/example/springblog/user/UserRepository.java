package com.example.springblog.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    // custom query to search to user by title or content
    // List<User> findByTitleContainingOrContentContaining(String text, String textAgain);
    
    Optional<User> findByUsername(String username);

    User deleteById(int id);
}