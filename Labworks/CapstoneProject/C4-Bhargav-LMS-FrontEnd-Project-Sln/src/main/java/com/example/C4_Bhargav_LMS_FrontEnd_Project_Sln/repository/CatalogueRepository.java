package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.repository;

import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Catalogue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CatalogueRepository extends JpaRepository<Catalogue,String> {
    boolean existsByTitle(String title);  // Method to check if a book exists by title
    // Find catalogue by book ID
    Optional<Catalogue> findById(String id);

    // Find catalogue by title
    Catalogue findByTitle(String title);
}
