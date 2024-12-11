package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.service;

import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Catalogue;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Circulation;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Member;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.repository.CatalogueRepository;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.repository.CirculationRepository;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CirculationService {
    private final CirculationRepository repository;

    public CirculationService(CirculationRepository repository) {
        this.repository = repository;
    }

    public List<Circulation> getAll() {
        return repository.findAll();
    }

    public Circulation save(Circulation circulation) {
        return repository.save(circulation);
    }

    public void delete(String id) {
        repository.deleteById(id);
    }
}
