import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu.services';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu implements OnInit {

  menuItems: any[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenu().subscribe({
      next: (data) => {
        this.menuItems = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Kunde inte hämta menyn.';
        this.isLoading = false;
      }
    });
  }
}