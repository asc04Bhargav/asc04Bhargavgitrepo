package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.controller;

import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Catalogue;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.service.CatalogueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v2/catalogues")
@CrossOrigin(origins = "http://localhost:4200")
public class CatalougeController {

    @Autowired
    private CatalogueService catalogueService;

    // Get all catalogues
    @GetMapping
    public ResponseEntity<List<Catalogue>> getAllCatalogues() {
        return ResponseEntity.ok(catalogueService.getAllCatalogues());
    }

    // Add a new catalogue
    @PostMapping
    public ResponseEntity<Catalogue> saveCatalogue(@RequestBody Catalogue catalogue) {
        try {
            Catalogue savedCatalogue = catalogueService.saveCatalogue(catalogue);
            return ResponseEntity.ok(savedCatalogue);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // Update an existing catalogue
    @PutMapping("/{id}")
    public ResponseEntity<Catalogue> updateCatalogue(@PathVariable String id, @RequestBody Catalogue catalogue) {
        try {
            Catalogue updatedCatalogue = catalogueService.updateCatalogue(id, catalogue);
            return ResponseEntity.ok(updatedCatalogue);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // Delete a catalogue
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCatalogue(@PathVariable String id) {
        catalogueService.deleteCatalogue(id);
        return ResponseEntity.noContent().build();
    }

    // Get a single catalogue by ID
    @GetMapping("/{id}")
    public ResponseEntity<Catalogue> getCatalogueById(@PathVariable String id) {
        Catalogue catalogue = catalogueService.getCatalogueById(id);
        if (catalogue != null) {
            return ResponseEntity.ok(catalogue);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
