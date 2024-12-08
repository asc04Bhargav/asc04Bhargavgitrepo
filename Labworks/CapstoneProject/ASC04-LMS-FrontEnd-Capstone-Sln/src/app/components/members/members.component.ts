import { Component, OnInit } from '@angular/core';
// import { DataService } from '../../services/data.service'; // Import DataServic
import { MemberService } from '../../services/members.service';
// import {}
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  members: any[] = [];
  selectedMember: any = null;
  isEdit: boolean = false;
  newMember: any = {
    id: '',
    name: '',
    email: '',
    number: '',
    gender: ''
  };

  constructor(private memberService: MemberService, private router:Router) {}

  ngOnInit(): void {
    this.loadMembers();
  }

  // Load members data from the backend
  loadMembers() {
    this.memberService.getMembers().subscribe((data) => {
      this.members = data;
    });
  }

  // Add a new member
  addMember() {
    this.memberService.addMember(this.newMember).subscribe(
      (response) => {
        this.members.push(response);
        this.newMember = { id: '', name: '', email: '', number: '', gender: '' }; // Reset form
      },
      (error) => {
        console.error('Error adding member!', error);
      }
    );
  }

  // Edit an existing member
  editMember(member: any) {
    this.selectedMember = { ...member }; // Copy member details for editing
    this.isEdit = true;
  }

  // Update member details
  updateMember() {
    this.memberService.updateMember(this.selectedMember.id, this.selectedMember).subscribe(
      (response) => {
        const index = this.members.findIndex((m) => m.id === this.selectedMember.id);
        if (index !== -1) {
          this.members[index] = response; // Update the member in the list
        }
        this.isEdit = false;
        this.selectedMember = null;
      },
      (error) => {
        console.error('Error updating member!', error);
      }
    );
  }

  // Delete a member
  deleteMember(id: string) {
    this.memberService.deleteMember(id).subscribe(
      () => {
        this.members = this.members.filter((member) => member.id !== id); // Remove member from the list
      },
      (error) => {
        console.error('Error deleting member!', error);
      }
    );
  }
}
