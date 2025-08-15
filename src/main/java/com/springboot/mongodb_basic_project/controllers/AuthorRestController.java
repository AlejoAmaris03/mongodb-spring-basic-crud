package com.springboot.mongodb_basic_project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import com.springboot.mongodb_basic_project.models.Author;
import com.springboot.mongodb_basic_project.services.AuthorService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;

@CrossOrigin
@RestController
@RequestMapping("/api/authors")

public class AuthorRestController {
    @Autowired
    private AuthorService authorService;

    @GetMapping
    public ResponseEntity<?> getAllAuthors() {
        return ResponseEntity.ok(authorService.getAllAuthors());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getAuthorById(@PathVariable int id) throws Exception {
        return ResponseEntity.ok(authorService.getAuthorById(id));
    }

    @PostMapping
    public ResponseEntity<?> saveAuthor(@RequestPart Author author) {
        return ResponseEntity.ok(authorService.saveAuthor(author));
    }

    @PutMapping
    public ResponseEntity<?> editAuthor(@RequestPart Author author) throws Exception {
        return ResponseEntity.ok(authorService.editAuthor(author));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAuthor(@PathVariable int id) throws Exception {
        return ResponseEntity.ok(authorService.deleteAuthor(id));
    }
}
