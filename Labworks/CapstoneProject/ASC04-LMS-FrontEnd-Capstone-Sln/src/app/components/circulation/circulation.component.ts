import { Component, OnInit } from '@angular/core';
import { CirculationService } from '../../services/circulation.service';

@Component({
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrls: ['./circulation.component.css'],
})
export class CirculationComponent implements OnInit {
  circulations: any[] = [];
  borrowedCirculations: any[] = [];
  returnedCirculations: any[] = [];
  searchQuery: string = '';
  errorMessage: string = '';
  isAddingBorrow: boolean = false;
  isAddingReturned: boolean = false;
  isEditing: boolean = false;

  circulationForm = {
    id: '',
    catalogueId: '',
    memberId: '',
    action: '',
    date: '',
    dueDate: '',
    returnDate: '',
    borrowedBookId: null,
  };

  constructor(private circulationService: CirculationService) {}

  ngOnInit(): void {
    this.fetchCirculations();
  }

  // Fetch all circulations
  fetchCirculations(): void {
    this.circulationService.getCirculations().subscribe({
      next: (data) => {
        this.circulations = data;
        this.filterCirculations();
      },
      error: (err) => {
        this.errorMessage = 'Failed to load circulations.';
        console.error(err);
      },
    });
  }

  // Show the form for adding a borrowed book
  showBorrowForm(): void {
    this.resetForm();
    this.isAddingBorrow = true;
    this.isAddingReturned = false;
    this.isEditing = false;
    this.circulationForm.action = 'Borrowed';
  }

  // Show the form for adding a returned book
  showReturnedForm(): void {
    this.resetForm();
    this.isAddingReturned = true;
    this.isAddingBorrow = false;
    this.isEditing = false;
    this.circulationForm.action = 'Returned';
  }

  // Add a new circulation
  addCirculation(): void {
    this.circulationService.addCirculation(this.circulationForm).subscribe({
      next: () => {
        this.fetchCirculations();
        this.resetForm();
      },
      error: (err) => {
        this.errorMessage = 'Failed to add circulation.';
        console.error(err);
      },
    });
  }

  // Update an existing circulation
  updateCirculation(): void {
    this.circulationService.updateCirculation(this.circulationForm.id, this.circulationForm).subscribe({
      next: () => {
        this.fetchCirculations();
        this.resetForm();
      },
      error: (err) => {
        this.errorMessage = 'Failed to update circulation.';
        console.error(err);
      },
    });
  }

  // Delete a circulation
  deleteCirculation(id: string): void {
    this.circulationService.deleteCirculation(id).subscribe({
      next: () => {
        this.fetchCirculations();
      },
      error: (err) => {
        this.errorMessage = 'Failed to delete circulation.';
        console.error(err);
      },
    });
  }

  // Filter circulations into borrowed and returned categories
  filterCirculations(): void {
    this.borrowedCirculations = this.circulations.filter((record) => record.action === 'Borrowed');
    this.returnedCirculations = this.circulations.filter((record) => record.action === 'Returned');
  }

  // Reset the form
  resetForm(): void {
    this.circulationForm = {
      id: '',
      catalogueId: '',
      memberId: '',
      action: '',
      date: '',
      dueDate: '',
      returnDate: '',
      borrowedBookId: null,
    };
    this.isAddingBorrow = false;
    this.isAddingReturned = false;
    this.isEditing = false;
  }

  // Edit an existing circulation
  editCirculation(circulation: any): void {
    this.isEditing = true;
    this.isAddingBorrow = false;
    this.isAddingReturned = false;
    this.circulationForm = { ...circulation };
  }

  // Search circulations
  searchCirculations(): void {
    const query = this.searchQuery.toLowerCase();
    this.borrowedCirculations = this.circulations.filter(
      (record) =>
        record.action === 'Borrowed' &&
        (record.catalogue.title.toLowerCase().includes(query) || record.member.name.toLowerCase().includes(query))
    );
    this.returnedCirculations = this.circulations.filter(
      (record) =>
        record.action === 'Returned' &&
        (record.catalogue.title.toLowerCase().includes(query) ||
          record.member.name.toLowerCase().includes(query) ||
          record.borrowedBookId?.toLowerCase().includes(query))
    );
  }
}
