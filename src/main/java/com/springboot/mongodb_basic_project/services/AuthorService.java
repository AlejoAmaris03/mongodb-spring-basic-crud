package com.springboot.mongodb_basic_project.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.springboot.mongodb_basic_project.models.Author;
import com.springboot.mongodb_basic_project.repositories.AuthorRepository;

@Service

public class AuthorService {
    @Autowired
    private AuthorRepository authorRepo;

    public List<Author> getAllAuthors() {
        return authorRepo.findAll();
    }

    public Author getAuthorById(int id)  throws Exception {
        return authorRepo.findById(id).orElseThrow(() -> new Exception("Author not found"));
    }

    public Author saveAuthor(Author author) {
        int id = authorRepo.findTopByOrderByIdDesc().getId() + 1;
        author.setId(id);

        return authorRepo.save(author);
    }

    public Author editAuthor(Author author) throws Exception {
        Author authorToUpdate = authorRepo
            .findById(author.getId())
            .orElseThrow(() -> new Exception("Author not found"));

        authorToUpdate.setAge(author.getAge());
        authorToUpdate.setName(author.getName());
        authorToUpdate.setSurname(author.getSurname());

        return authorRepo.save(authorToUpdate);
    }

    public int deleteAuthor(int id) throws Exception {
        authorRepo.findById(id).orElseThrow(() -> new Exception("Author not found"));
        authorRepo.deleteById(id);

        return id;
    }
}
