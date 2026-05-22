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

    constructor(private menuService: MenuService) {}

    ngOnInit(): void {
      this.menuService.getMenu().subscribe((data) => {
        this.menuItems = data;
    });
  }
}
