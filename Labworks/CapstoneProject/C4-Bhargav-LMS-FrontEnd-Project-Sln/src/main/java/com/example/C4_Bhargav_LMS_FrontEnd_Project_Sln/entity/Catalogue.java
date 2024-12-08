package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "catalogues")
public class Catalogue {
    @Id
    private String id;

    @Column(nullable = false)
    private String title;

    private String author;

    @Column(nullable = false)
    private int year;

    @PrePersist
    public void generateId() {
        if (this.id == null) {
            this.id = "LC" + String.format("%03d", System.currentTimeMillis() % 1000);
        }
    }
    public Catalogue(){}

    public Catalogue(String id, String title, String author, int year){
        this.id=id;
        this.title=title;
        this.author=author;
        this.year=year;
    }

    public String getId(){
        return id;
    }
    public void setId(String id){
        this.id=id;
    }

    public String getTitle(){
        return title;
    }
    public void setTitle(String title){
        this.title=title;
    }

    public String getAuthor(){
        return author;
    }

    public void setAuthor(String author){
        this.author=author;
    }

    public int getYear(){
        return year;
    }
    public void setYear(int year){
        this.year=year;
    }

}
