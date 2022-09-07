package com.example.springblog.auth;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.springblog.user.MyUserDetails;
import com.example.springblog.user.User;
import com.example.springblog.user.UserRepository;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUsername(username);

        // TODO: Custom "user not found" message is not sent when user is not found!
        // if (user.isEmpty()) {
        //     throw new UsernameNotFoundException("User not found for username : " + username);
        // }
        user.orElseThrow(() -> new UsernameNotFoundException("User not found for username : " + username));

        return user.map(MyUserDetails::new).get();
    }
}