import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'https://latin-bite-api.onrender.com/api/menu';

  constructor(private http: HttpClient) {}

  // Hämtar alla maträtter
  getMenu(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Lägger till ny maträtt
  addMenuItem(menuItem: any) {
    const token = sessionStorage.getItem('token');

    return this.http.post(this.apiUrl, menuItem, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  // Uppdaterar maträtt
  updateMenuItem(id: string, menuItem: any) {
    const token = sessionStorage.getItem('token');

    return this.http.put(`${this.apiUrl}/${id}`, menuItem, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  // Tar bort maträtt
  deleteMenuItem(id: string) {
    const token = sessionStorage.getItem('token');

    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}