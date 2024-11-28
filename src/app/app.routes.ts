import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { authGuard } from './auth.guard';

// Define las rutas para tu aplicación
export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent , canActivate: [authGuard]},
  { path: 'about', component: AboutComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' },
];
