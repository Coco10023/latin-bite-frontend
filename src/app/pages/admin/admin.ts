// Importerar Component och OnInit från Angular
import { Component, OnInit } from '@angular/core';

// Behövs för *ngFor och *ngIf
import { CommonModule } from '@angular/common';

// Behövs för formulär och ngModel
import { FormsModule } from '@angular/forms';

// Importerar menu-service som pratar med API:t
import { MenuService } from '../../services/menu.services';

// Importerar Router och Auth
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-admin',

  // Importerar Angular-moduler som komponenten behöver
  imports: [CommonModule, FormsModule],

  // HTML-filen för admin-sidan
  templateUrl: './admin.html',

  // SCSS/CSS-filen för admin-sidan
  styleUrl: './admin.scss',
})

export class Admin implements OnInit {

  // Array som innehåller alla maträtter
  menuItems: any[] = [];

  // Variabler kopplade till formulärfälten
  title: string = '';
  description: string = '';
  price: number = 0;

  editingId: string = '';

  // Constructor körs när komponenten skapas
  constructor(
    private menuService: MenuService,
    private auth: Auth,
    private router: Router
  ) {}

  // Körs automatiskt när komponenten laddas
  ngOnInit(): void {

    // Hämtar alla maträtter direkt när sidan öppnas
    this.getMenuItems();
  }

  // Funktion för att hämta meny från backend
  getMenuItems() {

    // Anropar getMenu() från menu-service
    this.menuService.getMenu().subscribe((data) => {

      // Sparar datan i menuItems-arrayen
      this.menuItems = data;
    });
  }

  // Funktion för att lägga till eller uppdatera maträtt
  addMenuItem() {

    const newItem = {
      title: this.title,
      description: this.description,
      price: this.price
    };

    if (this.editingId) {

      this.menuService
        .updateMenuItem(this.editingId, newItem)
        .subscribe(() => {

       this.getMenuItems();

       this.title = '';
       this.description = '';
       this.price = 0;

       this.editingId = '';
      });

     } else {

      this.menuService.addMenuItem(newItem).subscribe(() => {

      this.getMenuItems();

      this.title = '';
      this.description = '';
      this.price = 0;
      });
    }
  }

    deleteMenuItem(id: string) {

    this.menuService.deleteMenuItem(id).subscribe(() => {

      // Uppdaterar menyn efter delete
      this.getMenuItems();
    });
  }
    editMenuItem(item: any) {

      this.editingId = item._id;
      this.title = item.title;
       this.description = item.description;
      this.price = item.price;
  }

    logout() {
     this.auth.logout();
     this.router.navigate(['/login']);
  }
}