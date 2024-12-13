package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.repository;

import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, String> {
    // JpaRepository already provides methods like findAll(), save(), deleteById(), etc.
}
