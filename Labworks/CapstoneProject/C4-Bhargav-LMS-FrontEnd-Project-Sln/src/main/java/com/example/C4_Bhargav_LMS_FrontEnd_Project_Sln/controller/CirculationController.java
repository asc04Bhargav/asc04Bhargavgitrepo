package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.controller;

import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Circulation;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.service.CirculationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v4")
@CrossOrigin(origins = "http://localhost:4200")
public class CirculationController {
    @GetMapping("/hello")
    public String hello(){
        return "Hello";
    }

    @Autowired
    private CirculationService circulationService;

    // Fetch all circulations
    @GetMapping("/circulations")
    public List<Circulation> getAllCirculations() {
        return circulationService.getAllCirculations();
    }

    // Fetch a circulation by ID
    @GetMapping("/circulations/{id}")
    public ResponseEntity<Circulation> getCirculationById(@PathVariable String id) {
        try {
            Circulation circulation = circulationService.getCirculationById(id);
            return ResponseEntity.ok(circulation);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Fetch circulations by member ID and book ID
    @GetMapping("/circulations/filter")
    public ResponseEntity<List<Circulation>> getCirculationsByMemberAndBook(
            @RequestParam String memberId,
            @RequestParam String bookId
    ) {
        List<Circulation> circulations = circulationService.getCirculationsByMemberAndBook(memberId, bookId);
        if (circulations.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(circulations);
    }

    // Add a new circulation
    @PostMapping("/circulations")
    public ResponseEntity<Circulation> addCirculation(@RequestBody Circulation circulation) {
        try {
            Circulation savedCirculation = circulationService.addCirculation(circulation);
            return ResponseEntity.ok(savedCirculation);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    // Update an existing circulation
    @PutMapping("/circulations/{id}")
    public ResponseEntity<Circulation> updateCirculation(@PathVariable String id, @RequestBody Circulation circulation) {
        try {
            Circulation updatedCirculation = circulationService.updateCirculation(id, circulation);
            return ResponseEntity.ok(updatedCirculation);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a circulation
    @DeleteMapping("/circulations/{id}")
    public ResponseEntity<Void> deleteCirculation(@PathVariable String id) {
        try {
            circulationService.deleteCirculation(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
