import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private apiUrl = 'https://latin-bite-api.onrender.com/api/menu';

  constructor(private http: HttpClient) {}

  login(userData: any) {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }

  saveToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  logout() {
    sessionStorage.removeItem('token');
  }
}