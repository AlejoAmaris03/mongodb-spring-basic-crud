package com.springboot.mongodb_basic_project.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/views/books")

public class BookController {
    @GetMapping
    public String getAuthorsView() {
        return "books/books";
    }
}
