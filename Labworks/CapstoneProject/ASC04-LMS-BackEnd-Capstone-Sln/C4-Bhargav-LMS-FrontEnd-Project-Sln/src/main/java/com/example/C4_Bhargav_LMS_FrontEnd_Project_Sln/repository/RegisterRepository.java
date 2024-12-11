package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.repository;

import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Register;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterRepository extends JpaRepository<Register,Integer> {

}
