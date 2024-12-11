package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.service;

import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Member;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    // Get all members
    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    // Save a new member
    public Member saveMember(Member member) {
        if (member.getId() == null) {
            member.setId(generateMemberId());
        }
        return memberRepository.save(member);
    }

    // Generate ID like M001, M002, etc.
    private String generateMemberId() {
        List<Member> members = memberRepository.findAll();
        int nextId = members.size() + 1;  // Incrementing ID for each new member
        return "M" + String.format("%03d", nextId);  // Format as M001, M002, etc.
    }

    // Update an existing member
    public Member updateMember(String id, Member member) {
        member.setId(id);
        return memberRepository.save(member);
    }

    // Delete a member
    public void deleteMember(String id) {
        memberRepository.deleteById(id);
    }

    // Get a single member by ID
    public Member getMemberById(String id) {
        return memberRepository.findById(id).orElse(null);
    }
}
