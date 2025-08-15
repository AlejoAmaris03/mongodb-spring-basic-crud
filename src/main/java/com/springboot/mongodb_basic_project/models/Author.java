package com.springboot.mongodb_basic_project.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document("authors")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Author {
    @Id
    private int id;

    private String name;
    private String surname;
    private int age;
}
