import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-catalogue',
  templateUrl: './add-catalogue.component.html',
  styleUrls: ['./add-catalogue.component.css'],
})
export class AddCatalogueComponent {
  catalogue ={title: '', author: '', year: 0};

  constructor(private router: Router){}
  
  addCatalogue(){
    console.log('New Catalouge:', this.catalogue);
    alert('Catalogue addes successfuly!');
    this.router.navigate(['/catalouges'])
  }

  // deleteCatalogue(id: string){
  //   this.catalogue = this.catalogue.filter((this.catalogue) =>this.catalogue.id != id);
  //   console.log(`Catalogue with ID ${id} deleted.`);
  // }

}
