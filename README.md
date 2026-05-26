# Latin Bite Frontend

Detta projekt är frontend-delen av webbapplikationen Latin Bite.  
Webbplatsen är byggd med Angular och kommunicerar med ett REST API byggt med Node.js, Express och MongoDB.

Frontend-applikationen hämtar menydata från API:t och innehåller ett adminsystem där administratörer kan logga in och hantera maträtter.

## Publicerad webbplats

https://coco10023.github.io/latin-bite-frontend/#/

## Funktioner

- Dynamisk meny hämtad från REST API
- Responsiv design
- Routing med Angular Router
- Admin-login med JWT-autentisering
- Skyddad adminpanel med route guard
- CRUD-funktionalitet:
  - Skapa maträtter
  - Visa maträtter
  - Uppdatera maträtter
  - Ta bort maträtter
- Logout-funktion
- GitHub Pages deployment med GitHub Actions

## Teknologier

- Angular
- TypeScript
- HTML
- SCSS
- RxJS
- Angular Router
- GitHub Actions
- GitHub Pages

## API

Frontend-applikationen använder följande backend-API:

https://latin-bite-api.onrender.com/api/menu

## Installation och körning

Klona projektet:

```bash
git clone https://github.com/Coco10023/latin-bite-frontend.git
```

## Installera dependencies: npm install 

## Starta utvecklingsserver: ng serve 

## Öppna: http://localhost:4200

## Adminfunktioner

Administratörer kan:

Logga in
Lägga till maträtter
Redigera maträtter
Ta bort maträtter

Adminpanelen skyddas med JWT-token och Angular route guards.
