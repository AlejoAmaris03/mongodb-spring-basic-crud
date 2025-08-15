package com.springboot.mongodb_basic_project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import com.springboot.mongodb_basic_project.models.Book;
import com.springboot.mongodb_basic_project.services.BookService;

@CrossOrigin
@RestController
@RequestMapping("/api/books")

public class BookRestController {
    @Autowired
    private BookService bookService;

    @GetMapping
    public ResponseEntity<?> getAllBooks() {
        return ResponseEntity.ok(bookService.getAllBooks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBookById(@PathVariable int id) throws Exception {
        return ResponseEntity.ok(bookService.getBookById(id));
    }

    @PostMapping
    public ResponseEntity<?> saveBook(@RequestPart Book book) {
        return ResponseEntity.ok(bookService.saveBook(book));
    }

    @PutMapping
    public ResponseEntity<?> editBook(@RequestPart Book book) throws Exception {
        return ResponseEntity.ok(bookService.editBook(book));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable int id) throws Exception {
        return ResponseEntity.ok(bookService.deleteBook(id));
    }
}
