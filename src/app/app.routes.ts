import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];
