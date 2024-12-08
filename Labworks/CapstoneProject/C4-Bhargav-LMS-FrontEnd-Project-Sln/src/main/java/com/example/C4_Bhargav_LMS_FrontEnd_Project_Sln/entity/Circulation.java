package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "circulations")
public class Circulation {

    @Id
    @Column(name = "id", nullable = false, unique = true)
    private String id;

    @ManyToOne
    @JoinColumn(name = "book_id", referencedColumnName = "id", nullable = false)  // book_id maps to Catalogue
    private Catalogue catalogue;  // Association with Catalogue

    @ManyToOne
    @JoinColumn(name = "member_id", referencedColumnName = "id", nullable = false)  // member_id maps to Members
    private Members member;  // Association with Member

    @Enumerated(EnumType.STRING)
    @Column(name = "action", nullable = false)
    private Action action;

    @Column(name = "date", nullable = false)
    private LocalDate date;

    @Column(name = "due_date")
    private LocalDate dueDate;

    @Column(name = "return_date")
    private LocalDate returnDate;

    @Column(name = "borrowed_book_id")
    private String borrowedBookId;  // Used for returned books

    // Enum for Action (Borrowed, Returned)
    public enum Action {
        Borrowed,
        Returned
    }

    // Constructor
    public Circulation() {}

    public Circulation(Catalogue catalogue, Members member, Action action, LocalDate date,
                       LocalDate dueDate, LocalDate returnDate, String borrowedBookId) {
        this.catalogue = catalogue;
        this.member = member;
        this.action = action;
        this.date = date;
        this.dueDate = dueDate;
        this.returnDate = returnDate;
        this.borrowedBookId = borrowedBookId;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Catalogue getCatalogue() {
        return catalogue;
    }

    public void setCatalogue(Catalogue catalogue) {
        this.catalogue = catalogue;
    }

    public Members getMember() {
        return member;
    }

    public void setMember(Members member) {
        this.member = member;
    }

    public Action getAction() {
        return action;
    }

    public void setAction(Action action) {
        this.action = action;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public LocalDate getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
    }

    public String getBorrowedBookId() {
        return borrowedBookId;
    }

    public void setBorrowedBookId(String borrowedBookId) {
        this.borrowedBookId = borrowedBookId;
    }

    // PrePersist method to generate the ID in the required format: BB001 or BR001
    @PrePersist
    public void generateId() {
        if (this.id == null) {
            String actionPrefix = (this.action == Action.Borrowed) ? "BB" : "BR";
            long timestamp = System.currentTimeMillis() % 1000; // Generate a 3-digit number
            this.id = actionPrefix + String.format("%03d", timestamp);  // Format as BB001 or BR001
        }
    }
}
