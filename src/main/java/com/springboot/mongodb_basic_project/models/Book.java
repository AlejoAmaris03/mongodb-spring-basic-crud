package com.springboot.mongodb_basic_project.models;

import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document("books")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Book {
    @Id
    private int id;

    private String name;
    private String author;
    private int pages;
    private Float price;
    private List<String> genres;
}
