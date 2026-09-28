package com.grahamschomp.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {

    record MessageResponse(String message) {}

    @GetMapping("/hello")
    public MessageResponse hello() {
        return new MessageResponse("Hello from Spring Boot!");
    }
}