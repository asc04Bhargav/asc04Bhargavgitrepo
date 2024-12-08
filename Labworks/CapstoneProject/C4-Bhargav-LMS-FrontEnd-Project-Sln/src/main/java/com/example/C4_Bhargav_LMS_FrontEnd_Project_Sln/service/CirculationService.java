package com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.service;

import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.entity.Circulation;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.repository.CatalogueRepository;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.repository.CirculationRepository;
import com.example.C4_Bhargav_LMS_FrontEnd_Project_Sln.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CirculationService {

    @Autowired
    private CirculationRepository circulationRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private CatalogueRepository catalogueRepository;

    // Fetch all circulations
    public List<Circulation> getAllCirculations() {
        return circulationRepository.findAll();
    }

    // Add a new circulation
    public Circulation addCirculation(Circulation circulation) {
        // Validate if the member exists
        if (!memberRepository.existsById(circulation.getMember().getId())) {
            throw new IllegalArgumentException("Member not found: " + circulation.getMember().getId());
        }

        // Validate if the book exists in the catalogue
        if (!catalogueRepository.existsById(circulation.getCatalogue().getId())) {
            throw new IllegalArgumentException("Book not found in the catalogues: " + circulation.getCatalogue().getId());
        }

        // Check if a circulation already exists for the member and book
        List<Circulation> existingCirculations = circulationRepository.findByMember_IdAndCatalogue_Id(
                circulation.getMember().getId(),
                circulation.getCatalogue().getId()
        );
        if (!existingCirculations.isEmpty() && circulation.getAction() == Circulation.Action.Borrowed) {
            throw new IllegalArgumentException("This book is already borrowed by the member.");
        }

        // Save the circulation if validations pass
        return circulationRepository.save(circulation);
    }

    public Circulation getCirculationById(String id) {
        return circulationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Circulation not found with ID: " + id));
    }

    // Update an existing circulation
    public Circulation updateCirculation(String id, Circulation circulation) {
        Optional<Circulation> existingCirculationOpt = circulationRepository.findById(id);

        if (existingCirculationOpt.isPresent()) {
            Circulation existingCirculation = existingCirculationOpt.get();
            existingCirculation.setCatalogue(circulation.getCatalogue());
            existingCirculation.setMember(circulation.getMember());
            existingCirculation.setAction(circulation.getAction());
            existingCirculation.setDate(circulation.getDate());
            existingCirculation.setDueDate(circulation.getDueDate());
            existingCirculation.setReturnDate(circulation.getReturnDate());
            existingCirculation.setBorrowedBookId(circulation.getBorrowedBookId());

            // Validate updated member and book information
            if (!memberRepository.existsById(existingCirculation.getMember().getId())) {
                throw new IllegalArgumentException("Updated member not found: " + existingCirculation.getMember().getId());
            }

            if (!catalogueRepository.existsById(existingCirculation.getCatalogue().getId())) {
                throw new IllegalArgumentException("Updated book not found in catalogues: " + existingCirculation.getCatalogue().getId());
            }

            return circulationRepository.save(existingCirculation);
        } else {
            throw new RuntimeException("Circulation not found with ID: " + id);
        }
    }

    // Delete a circulation by ID
    public void deleteCirculation(String id) {
        circulationRepository.deleteById(id);
    }

    // Find circulations by action (Borrowed or Returned)
    public List<Circulation> findCirculationsByAction(String action) {
        return circulationRepository.findByAction(Circulation.Action.valueOf(action));
    }

    // Find circulations by member and book
    public List<Circulation> getCirculationsByMemberAndBook(String memberId, String bookId) {
        return circulationRepository.findByMember_IdAndCatalogue_Id(memberId, bookId);
    }
}
