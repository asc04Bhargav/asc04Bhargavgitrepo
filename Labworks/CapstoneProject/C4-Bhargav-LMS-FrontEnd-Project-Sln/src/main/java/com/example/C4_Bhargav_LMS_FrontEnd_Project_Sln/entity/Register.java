package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="register")
public class Register {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // Auto-generating ID
    @Column(name = "id")
    private int id;

    @Column(name = "Name", nullable = false) // Name is required
    private String name;

    @Column(name = "email", nullable = false, unique = true) // Email is required and unique
    private String email;

    @Column(name = "mobile", nullable = false) // Mobile number is required
    private String mobile;

    @Column(name = "password", nullable = false) // Password is required
    private String password;

    @Column(name = "gender", nullable = false) // Gender is required
    private String gender;

    // Default constructor
    public Register() {
    }

    // Parameterized constructor
    public Register(int id, String name, String email, String mobile, String password, String gender) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.password = password;
        this.gender = gender;
    }

    // Getters
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getMobile() {
        return mobile;
    }

    public String getPassword() {
        return password;
    }

    public String getGender() {
        return gender;
    }

    // Setters
    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
