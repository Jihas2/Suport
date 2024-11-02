import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'navbar', component: NavbarComponent }
];
