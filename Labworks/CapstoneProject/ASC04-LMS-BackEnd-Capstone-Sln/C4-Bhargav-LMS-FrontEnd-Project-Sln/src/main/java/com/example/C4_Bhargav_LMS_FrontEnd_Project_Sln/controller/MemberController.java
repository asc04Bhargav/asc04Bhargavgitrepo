package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.controller;

import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Member;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v3/members")
@CrossOrigin(origins = "http://localhost:4200")
public class MemberController {

    @Autowired
    private MemberService memberService;

    // Get all members
    @GetMapping
    public ResponseEntity<List<Member>> getAllMembers() {
        return ResponseEntity.ok(memberService.getAllMembers());
    }

    // Add a new member
    @PostMapping
    public ResponseEntity<Member> saveMember(@RequestBody Member member) {
        try {
            Member savedMember = memberService.saveMember(member);
            return ResponseEntity.ok(savedMember);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // Update an existing member
    @PutMapping("/{id}")
    public ResponseEntity<Member> updateMember(@PathVariable String id, @RequestBody Member member) {
        try {
            Member updatedMember = memberService.updateMember(id, member);
            return ResponseEntity.ok(updatedMember);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // Delete a member
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMember(@PathVariable String id) {
        memberService.deleteMember(id);
        return ResponseEntity.noContent().build();
    }

    // Get a single member by ID
    @GetMapping("/{id}")
    public ResponseEntity<Member> getMemberById(@PathVariable String id) {
        Member member = memberService.getMemberById(id);
        if (member != null) {
            return ResponseEntity.ok(member);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
