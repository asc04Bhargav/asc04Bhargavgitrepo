package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.controller;

import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Circulation;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.service.CirculationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v4/circulations")
@CrossOrigin(origins = "http://localhost:4200")
public class CirculationController {
    private final CirculationService service;

    public CirculationController(CirculationService service) {
        this.service = service;
    }

    @GetMapping
    public List<Circulation> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Circulation save(@RequestBody Circulation circulation) {
        return service.save(circulation);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        service.delete(id);
    }
}
