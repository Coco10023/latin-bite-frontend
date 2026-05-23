import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  login() {
    const userData = {
      username: this.username,
      password: this.password
    };

    this.auth.login(userData).subscribe({
      next: (response: any) => {
        this.auth.saveToken(response.token);
        this.router.navigate(['/admin']);
      },
      error: () => {
        this.errorMessage = 'Fel användarnamn eller lösenord';
      }
    });
  }
}