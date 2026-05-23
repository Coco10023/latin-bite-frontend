import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'http://localhost:3000/api/menu';

  constructor(private http: HttpClient) {}

  // Hämtar alla maträtter
  getMenu(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Skapar ny maträtt
  addMenuItem(menuItem: any) {

    // Hämtar JWT-token från sessionStorage
    const token = sessionStorage.getItem('token');

    // Skickar POST-request till backend
    return this.http.post(this.apiUrl, menuItem, {

      // Skickar med token i headers
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}