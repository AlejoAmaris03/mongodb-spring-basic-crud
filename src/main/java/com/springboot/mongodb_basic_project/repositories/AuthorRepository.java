package com.springboot.mongodb_basic_project.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.springboot.mongodb_basic_project.models.Author;

@Repository

public interface AuthorRepository extends MongoRepository<Author, Integer> {
    public Author findTopByOrderByIdDesc();
}
