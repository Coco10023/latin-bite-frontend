// Importerar funktioner från Angular Router
import { CanActivateFn, Router } from '@angular/router';

// Importerar inject för dependency injection
import { inject } from '@angular/core';

// Skapar en route guard
export const authGuard: CanActivateFn = () => {

  // Hämtar Router så vi kan navigera mellan sidor
  const router = inject(Router);

  // Hämtar JWT-token från sessionStorage
  const token = sessionStorage.getItem('token');

  // Om token finns → användaren får tillgång till sidan
  if (token) {
    return true;
  }

  // Om token saknas → skicka användaren till login-sidan
  router.navigate(['/login']);

  // Stoppar åtkomst till skyddad route
  return false;
};