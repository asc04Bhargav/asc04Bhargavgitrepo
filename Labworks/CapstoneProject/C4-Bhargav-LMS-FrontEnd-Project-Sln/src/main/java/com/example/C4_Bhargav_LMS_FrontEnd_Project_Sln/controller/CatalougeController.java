package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.controller;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Catalogue;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.service.CatalogueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v2")
@CrossOrigin(origins = "http://localhost:4200")
public class CatalougeController {
    @Autowired
    private CatalogueService catalogueService;

    // Fetch all catalogues
    @GetMapping("/catalogues")
    public List<Catalogue> getAllCatalogues() {
        return catalogueService.getAllCatalogues();
    }

    // Fetch a catalogue by ID
    @GetMapping("/catalogues/{id}")
    public ResponseEntity<Catalogue> getCatalogueById(@PathVariable String id) {
        try {
            Catalogue catalogue = catalogueService.getCatalogueById(id);
            return ResponseEntity.ok(catalogue);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Add a new catalogue
    @PostMapping("/catalogues")
    public ResponseEntity<Catalogue> addCatalogue(@RequestBody Catalogue catalogue) {
        try {
            return ResponseEntity.ok(catalogueService.addCatalogue(catalogue));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null); // Return bad request if catalogue exists
        }
    }

    // Update an existing catalogue
    @PutMapping("/catalogues/{id}")
    public ResponseEntity<Catalogue> updateCatalogue(@PathVariable String id, @RequestBody Catalogue catalogue) {
        try {
            return ResponseEntity.ok(catalogueService.updateCatalogue(id, catalogue));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build(); // Return 404 if catalogue not found
        }
    }

    // Delete catalogue by ID
    @DeleteMapping("/catalogues/{id}")
    public ResponseEntity<Void> deleteCatalogue(@PathVariable String id) {
        try {
            catalogueService.deleteCatalogue(id);
            return ResponseEntity.noContent().build(); // Successfully deleted
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build(); // Return 404 if catalogue not found
        }
    }
}
