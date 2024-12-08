import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../../services/catalogues.service';

@Component({
  selector: 'app-catalogues',
  templateUrl: './catalogues.component.html',
  styleUrls: ['./catalogues.component.css'],
})
export class CataloguesComponent implements OnInit {
  catalogues: any[] = [];
  filteredCatalogues: any[] = [];
  isDataLoaded: boolean = false;
  errorMessage: string = '';
  searchQuery: string = ''; // Holds the search input

  catalogueForm = {
    id: '',
    title: '',
    author: '',
    year: '',
  };

  isEditing: boolean = false;
  showAddForm: boolean = false;

  constructor(private catalogueService: CatalogueService) {}

  ngOnInit(): void {
    this.fetchCatalogues();
  }

  // Fetch catalogues from the service and initialize filteredCatalogues
  fetchCatalogues(): void {
    this.catalogueService.getCatalogues().subscribe({
      next: (data) => {
        this.catalogues = data;
        this.filteredCatalogues = [...this.catalogues]; // Initialize filteredCatalogues with all data
        this.isDataLoaded = true;
      },
      error: (error) => {
        this.errorMessage = 'Error fetching catalogues data.';
        console.error('Fetch Error:', error);
      },
    });
  }

  // Handle search query and filter the catalogues
  filterCatalogues(): void {
    const query = this.searchQuery.toLowerCase().trim(); // Trim and lowercase the query
    this.filteredCatalogues = this.catalogues.filter(
      (catalogue) =>
        catalogue.title.toLowerCase().includes(query) ||
        catalogue.author.toLowerCase().includes(query) ||
        catalogue.year.toString().includes(query)
    );
  }

  addCatalogue(): void {
    this.catalogueForm.id = `C${String(this.catalogues.length + 1).padStart(3, '0')}`;
    //this.catalogueForm.id = `C${String(this.catalogues.)}`
    this.catalogueService.addCatalogue(this.catalogueForm).subscribe({
      next: () => {
        this.fetchCatalogues();
        this.resetForm();
        this.showAddForm = false;
      },
      error: (error) => {
        this.errorMessage = 'Error adding catalogue.';
        console.error('Add Error:', error);
      },
    });
  }

  editCatalogue(catalogue: any): void {
    this.isEditing = true;
    this.showAddForm = true;
    this.catalogueForm = { ...catalogue };
  }

  updateCatalogue(): void {
    this.catalogueService.updateCatalogue(this.catalogueForm.id, this.catalogueForm).subscribe({
      next: () => {
        this.fetchCatalogues();
        this.resetForm();
        this.showAddForm = false;
      },
      error: (error) => {
        this.errorMessage = 'Error updating catalogue.';
        console.error('Update Error:', error);
      },
    });
  }

  deleteCatalogue(id: string): void {
    this.catalogueService.deleteCatalogue(id).subscribe({
      next: () => {
        this.fetchCatalogues();
      },
      error: (error) => {
        this.errorMessage = 'Error deleting catalogue.';
        console.error('Delete Error:', error);
      },
    });
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
    if (!this.showAddForm) {
      this.resetForm();
    }
  }

  resetForm(): void {
    this.catalogueForm = {
      id: '',
      title: '',
      author: '',
      year: '',
    };
    this.isEditing = false;
  }
}
