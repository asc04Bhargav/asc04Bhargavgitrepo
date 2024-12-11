package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.service;

import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Catalogue;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.repository.CatalogueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CatalogueService {

    @Autowired
    private CatalogueRepository catalogueRepository;

    // Get all catalogues
    public List<Catalogue> getAllCatalogues() {
        return catalogueRepository.findAll();
    }

    // Save a new catalogue
    public Catalogue saveCatalogue(Catalogue catalogue) {
        // Auto-generate catalogue ID if not provided
        if (catalogue.getId() == null) {
            catalogue.setId(generateCatalogueId());
        }
        return catalogueRepository.save(catalogue);
    }

    // Generate ID like CAT001, CAT002, etc.
    private String generateCatalogueId() {
        List<Catalogue> catalogues = catalogueRepository.findAll();
        int nextId = catalogues.size() + 1;  // Incrementing ID for each new entry
        return "LC" + String.format("%03d", nextId);  // Format as LC001 etc.
    }

    // Update an existing catalogue
    public Catalogue updateCatalogue(String id, Catalogue catalogue) {
        catalogue.setId(id);
        return catalogueRepository.save(catalogue);
    }

    // Delete a catalogue
    public void deleteCatalogue(String id) {
        catalogueRepository.deleteById(id);
    }

    // Get a single catalogue by ID
    public Catalogue getCatalogueById(String id) {
        return catalogueRepository.findById(id).orElse(null);
    }
}
