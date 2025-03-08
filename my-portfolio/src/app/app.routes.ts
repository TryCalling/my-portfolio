import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route for home
  { path: 'about', component: AboutmeComponent }  // Path for "About Me" page
];
