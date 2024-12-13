package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.controller;

import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Register;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.repository.RegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")  // Allow access from Angular's local server
public class RegisterControllerDbRepo {

    @Autowired
    private RegisterRepository registerRepository;

    @GetMapping("/register")
    public List<Register> getRegisterList() {
        return registerRepository.findAll();
    }

    @PostMapping("/register")
    public Register createRegister(@RequestBody Register register) {
        return registerRepository.save(register);
    }

    @GetMapping("/register/{id}")
    public Register getRegisterById(@PathVariable(value="id") Integer id) {
        return registerRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }
}

