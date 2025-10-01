import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', loadComponent: () => import('./login.component').then(m => m.LoginComponent) },
	{ path: 'register', loadComponent: () => import('./register.component').then(m => m.RegisterComponent) },
];
