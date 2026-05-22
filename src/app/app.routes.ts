import { Routes } from '@angular/router';
import { Menu } from './pages/menu/menu';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Login } from './pages/login/login';
import { Admin } from './pages/admin/admin';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'menu', component: Menu },
  { path: 'about', component: About },
  { path: 'login', component: Login },
  { path: 'admin', component: Admin }
];