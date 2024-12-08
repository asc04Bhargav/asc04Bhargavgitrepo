package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.service;

import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Members;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    // Fetch all members
    public List<Members> getAllMembers() {
        return memberRepository.findAll();
    }

    // Find member by ID
    public Members getMemberById(String id) {
        Optional<Members> member = memberRepository.findById(id);
        if (member.isPresent()) {
            return member.get();
        } else {
            throw new RuntimeException("Member not found with ID: " + id);
        }
    }

    // Add new member
    public Members addMember(Members member) {
        if (memberRepository.existsById(member.getId())) {
            throw new IllegalArgumentException("Member already exists with ID: " + member.getId());
        }
        return memberRepository.save(member);
    }

    // Update an existing member
    public Members updateMember(String id, Members member) {
        Optional<Members> existingMemberOpt = memberRepository.findById(id);
        if (existingMemberOpt.isPresent()) {
            Members existingMember = existingMemberOpt.get();
            existingMember.setName(member.getName());
            existingMember.setEmail(member.getEmail());
            existingMember.setNumber(member.getNumber());
            existingMember.setGender(member.getGender());
            return memberRepository.save(existingMember);
        } else {
            throw new RuntimeException("Member not found with ID: " + id);
        }
    }

    // Delete member by ID
    public void deleteMember(String id) {
        memberRepository.deleteById(id);
    }

    // Check if member exists by ID
    public boolean existsById(String id) {
        return memberRepository.findById(id).isPresent();
    }

    // Check if member exists by email
    public boolean existsByEmail(String email) {
        return memberRepository.findByEmail(email) != null;
    }
}
