package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Register;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.repository.RegisterRepository;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class RegisterControllerDbRepo {

    @Autowired
    private RegisterRepository registerRepository;

    @GetMapping("/register")
    public List getRegisterList() {
//		List<Register> registerList = null;
//        registerList = registerRepository.findAll();
//        return employeeList;
        return registerRepository.findAll();
    }

    @PostMapping("/register")
    public Register createRegister(@RequestBody Register register) {
        Register savedRegister = registerRepository.save(register);
        return savedRegister;
    }


    @GetMapping("/register/{id}")
    public Register getRegisterById(@PathVariable(value="id") Integer id) {
        Register existingRegister = registerRepository.findById(id).get();
        return existingRegister;
    }


}
