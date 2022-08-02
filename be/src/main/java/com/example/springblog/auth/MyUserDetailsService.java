package com.example.springblog.auth;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

// import com.example.springblog.user.User;
import com.example.springblog.user.UserRepository;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // TODO: match with actual user from the database
        return new User("test", "password", new ArrayList<>());

        // User user = userRepository.findByUsername(username);
        // if (user == null) {
        // throw new UsernameNotFoundException(username);
        // }

        // return new MyUserPrincipal(user);
    }
}