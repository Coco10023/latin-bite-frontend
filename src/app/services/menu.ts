import { Injectable } from '@angular/core';
import { MenuService } from '../services/menu.services';

@Injectable({
  providedIn: 'root',
})
export class Menu {
  menuItems: any[] = [];
  constructor(private menuService: MenuService) {}
}


