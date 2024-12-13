package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
@Entity
@Table(name = "circulations")
public class Circulation {

    @Id
    private String id;

    @Column(nullable = false)
    private String bookId;

    @Column(nullable = false)
    private String memberId;

    @Column(nullable = false)
    private String status;

    // Default constructor
    public Circulation() {
    }

    // Parameterized constructor
    public Circulation(String id, String bookId, String memberId, String status) {
        this.id = id;
        this.bookId = bookId;
        this.memberId = memberId;
        this.status = status;
    }

    public String getId(){
        return id;
    }

    public void setId(String id){
        this.id=id;
    }

    public String getBookId(){
        return bookId;
    }
    public void setBookId(String bookId){
        this.bookId=bookId;
    }

    public String getMemberId(){
        return memberId;
    }
    public void setMemberId(String memberId){
        this.memberId=memberId;
    }

    public String getStatus(){
        return status;
    }
    public void setStatus(String status){
        this.status=status;
    }

}
