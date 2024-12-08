package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.controller;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Members;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v3")
@CrossOrigin(origins = "http://localhost:4200")
public class MemberController {
    @Autowired
    private MemberService memberService;

    // Fetch all members
    @GetMapping("/members")
    public List<Members> getAllMembers() {
        return memberService.getAllMembers();
    }

    // Fetch a member by ID
    @GetMapping("/members/{id}")
    public ResponseEntity<Members> getMemberById(@PathVariable String id) {
        try {
            Members member = memberService.getMemberById(id);
            return ResponseEntity.ok(member);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Add a new member
    @PostMapping("/members")
    public ResponseEntity<Members> addMember(@RequestBody Members member) {
        try {
            return ResponseEntity.ok(memberService.addMember(member));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null); // Return bad request if member exists
        }
    }

    // Update an existing member
    @PutMapping("/members/{id}")
    public ResponseEntity<Members> updateMember(@PathVariable String id, @RequestBody Members member) {
        try {
            return ResponseEntity.ok(memberService.updateMember(id, member));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build(); // Return 404 if member not found
        }
    }

    // Delete member by ID
    @DeleteMapping("/members/{id}")
    public ResponseEntity<Void> deleteMember(@PathVariable String id) {
        try {
            memberService.deleteMember(id);
            return ResponseEntity.noContent().build(); // Successfully deleted
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build(); // Return 404 if member not found
        }
    }
}
