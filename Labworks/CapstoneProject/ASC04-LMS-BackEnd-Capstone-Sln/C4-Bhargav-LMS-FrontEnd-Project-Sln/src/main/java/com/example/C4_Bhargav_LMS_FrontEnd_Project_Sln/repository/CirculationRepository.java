package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.repository;

import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Circulation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CirculationRepository extends JpaRepository<Circulation, String> {
}

