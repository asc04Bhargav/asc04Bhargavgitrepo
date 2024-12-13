package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "catalogues")
public class Catalogue {
    @Id
    private String id;  // ID as String

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String author;

    @Column(nullable = false)
    private Integer published_year;

    @Column(nullable = false)
    private String description;

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Integer getPublishedYear() {
        return published_year;
    }

    public void setPublishedYear(Integer published_year) {
        this.published_year = published_year;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
