package com.springboot.mongodb_basic_project.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.springboot.mongodb_basic_project.models.Book;

@Repository

public interface BookRepository extends MongoRepository<Book, Integer> {
    public Book findTopByOrderByIdDesc();
}
