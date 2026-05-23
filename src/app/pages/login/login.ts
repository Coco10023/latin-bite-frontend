// Importerar Component från Angular
import { Component } from '@angular/core';

// Behövs för formulär och ngModel
import { FormsModule } from '@angular/forms';

// Används för att navigera mellan sidor
import { Router } from '@angular/router';

// Importerar vår auth-service
import { Auth } from '../../services/auth';

// Behövs för *ngIf
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',

  // Importerar moduler som komponenten behöver
  imports: [FormsModule, CommonModule],

  // HTML-filen för komponenten
  templateUrl: './login.html',

  // SCSS/CSS-filen för komponenten
  styleUrl: './login.scss',
})

export class Login {

  // Variabel för användarnamn från inputfältet
  username: string = '';

  // Variabel för lösenord från inputfältet
  password: string = '';

  // Variabel för felmeddelande
  errorMessage: string = '';

  // Constructor körs när komponenten skapas
  constructor(

    // Auth-service används för login och token
    private auth: Auth,

    // Router används för att byta sida
    private router: Router
  ) {}

  // Funktion som körs när formuläret skickas
  login() {

    // Skapar objekt med användarens login-data
    const userData = {
      username: this.username,
      password: this.password
    };

    // Skickar login-request till backend API
    this.auth.login(userData).subscribe({

      // Körs om login lyckas
      next: (response: any) => {

        // Sparar JWT-token i sessionStorage
        this.auth.saveToken(response.token);

        // Skickar användaren till admin-sidan
        this.router.navigate(['/admin']);
      },

      // Körs om login misslyckas
      error: () => {

        // Visar felmeddelande på sidan
        this.errorMessage = 'Fel användarnamn eller lösenord';
      }
    });
  }
}