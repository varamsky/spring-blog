package com.example.springblog.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    // custom query to search to user by title or content
    // List<User> findByTitleContainingOrContentContaining(String text, String textAgain);
    
}