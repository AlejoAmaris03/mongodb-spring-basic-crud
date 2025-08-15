package com.springboot.mongodb_basic_project.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/views/authors")

public class AuthorController {
    @GetMapping
    public String getAuthorsView() {
        return "authors/authors";
    }
}
