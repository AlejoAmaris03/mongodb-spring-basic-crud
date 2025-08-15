package com.springboot.mongodb_basic_project.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.springboot.mongodb_basic_project.models.Book;
import com.springboot.mongodb_basic_project.repositories.BookRepository;

@Service

public class BookService {
    @Autowired
    private BookRepository bookRepo;

    public List<Book> getAllBooks() {
        return bookRepo.findAll();
    }

    public Book getBookById(int id)  throws Exception {
        return bookRepo.findById(id).orElseThrow(() -> new Exception("Book not found"));
    }

    public Book saveBook(Book book) {
        int id = bookRepo.findTopByOrderByIdDesc().getId() + 1;
        book.setId(id);

        return bookRepo.save(book);
    }

    public Book editBook(Book book) throws Exception {
        Book bookToUpdate = bookRepo
            .findById(book.getId())
            .orElseThrow(() -> new Exception("Book not found"));

        bookToUpdate.setAuthor(book.getAuthor());
        bookToUpdate.setGenres(book.getGenres());
        bookToUpdate.setName(book.getName());
        bookToUpdate.setPages(book.getPages());
        bookToUpdate.setPrice(book.getPrice());

        return bookRepo.save(bookToUpdate);
    }

    public int deleteBook(int id) throws Exception {
        bookRepo.findById(id).orElseThrow(() -> new Exception("Book not found"));
        bookRepo.deleteById(id);

        return id;
    }
}
