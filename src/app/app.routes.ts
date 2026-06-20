import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { CriarConta } from './pages/criar-conta/criar-conta';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path:'', //ROTA PADRÃO
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m=>m.Login)
  },
  {
    path: 'criar-conta',
    loadComponent: () => import('./pages/criar-conta/criar-conta').then(m=>m.CriarConta)
  },
  {
    path: 'home',
    loadComponent: ()=> import('./pages/home/home').then(m=>m.Home)
  },
  {
    path: '**', //ROTA CORINGA
    redirectTo: 'login'
  }
];
