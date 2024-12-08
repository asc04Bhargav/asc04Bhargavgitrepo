package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "members")
public class Members {
    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "name",nullable = false)
    private String name;

    @Column(name = "email",nullable = false, unique = true)
    private String email;

    @Column(name = "number",nullable = false, length = 10)
    private String number;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender",nullable = false)
    private Gender gender;

    public enum Gender {
        Male,
        Female,
        Other
    }
    public Members() {}

    // Parameterized constructor
    public Members(String id, String name, String email, String number, Gender gender) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.number = number;
        this.gender = gender;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    // ID Auto-generation Method
    @PrePersist
    public void generateId() {
        if (this.id == null) {
            long timestamp = System.currentTimeMillis() % 1000; // Generate a 3-digit number
            this.id = "LM" + String.format("%03d", timestamp); // Format as LM001
        }
    }


}
