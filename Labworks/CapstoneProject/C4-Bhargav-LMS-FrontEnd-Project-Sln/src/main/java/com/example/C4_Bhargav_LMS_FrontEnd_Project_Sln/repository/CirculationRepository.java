package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.repository;

import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Circulation;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Circulation.Action;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CirculationRepository extends JpaRepository<Circulation,String> {
    List<Circulation> findByAction(Action action);

    // Find circulation by member ID and book ID (borrowed or returned)
    List<Circulation> findByMember_IdAndCatalogue_Id(String memberId, String bookId);

}
