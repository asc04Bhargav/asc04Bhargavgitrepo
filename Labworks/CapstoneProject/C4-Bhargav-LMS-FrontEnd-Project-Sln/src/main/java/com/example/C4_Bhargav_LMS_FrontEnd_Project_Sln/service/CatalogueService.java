package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.service;

import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Catalogue;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.repository.CatalogueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CatalogueService {

    @Autowired
    private CatalogueRepository catalogueRepository;

    // Fetch all catalogues
    public List<Catalogue> getAllCatalogues() {
        return catalogueRepository.findAll();
    }

    // Find catalogue by ID
    public Catalogue getCatalogueById(String id) {
        Optional<Catalogue> catalogue = catalogueRepository.findById(id);
        if (catalogue.isPresent()) {
            return catalogue.get();
        } else {
            throw new RuntimeException("Catalogue not found with ID: " + id);
        }
    }

    // Add new catalogue
    public Catalogue addCatalogue(Catalogue catalogue) {
        if (catalogueRepository.existsById(catalogue.getId())) {
            throw new IllegalArgumentException("Catalogue already exists with ID: " + catalogue.getId());
        }
        return catalogueRepository.save(catalogue);
    }

    // Update an existing catalogue
    public Catalogue updateCatalogue(String id, Catalogue catalogue) {
        Optional<Catalogue> existingCatalogueOpt = catalogueRepository.findById(id);
        if (existingCatalogueOpt.isPresent()) {
            Catalogue existingCatalogue = existingCatalogueOpt.get();
            existingCatalogue.setTitle(catalogue.getTitle());
            existingCatalogue.setAuthor(catalogue.getAuthor());
            existingCatalogue.setYear(catalogue.getYear());
            return catalogueRepository.save(existingCatalogue);
        } else {
            throw new RuntimeException("Catalogue not found with ID: " + id);
        }
    }

    // Delete catalogue by ID
    public void deleteCatalogue(String id) {
        catalogueRepository.deleteById(id);
    }

    // Check if catalogue exists by title
    public boolean existsByTitle(String title) {
        return catalogueRepository.findByTitle(title) != null;
    }

    // Check if catalogue exists by ID
    public boolean existsById(String id) {
        return catalogueRepository.findById(id).isPresent();
    }
}
