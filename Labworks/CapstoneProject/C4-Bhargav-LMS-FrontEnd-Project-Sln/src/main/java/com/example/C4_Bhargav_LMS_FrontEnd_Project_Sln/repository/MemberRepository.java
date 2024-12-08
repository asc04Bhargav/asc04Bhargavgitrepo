package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.repository;

import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Members;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Members,String> {
    // Find member by their ID
//    Members findById(String id);
    Optional<Members> findById(String id);
    // Find member by their email
    Members findByEmail(String email);

    // Check if member exists by ID
    boolean existsById(String id);
}
