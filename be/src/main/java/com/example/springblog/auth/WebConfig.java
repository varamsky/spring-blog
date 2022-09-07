package com.example.springblog.auth;

import org.springframework.security.config.annotation.web.builders.Configuration;
import org.springframework.security.config.annotation.web.builders.EnableWebMvc;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");
    }
}