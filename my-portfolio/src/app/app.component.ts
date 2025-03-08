import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component'; // Import NavbarComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent], // Import RouterOutlet and NavbarComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to styleUrls (plural)
})
export class AppComponent {
  title = 'my-portfolio';
}
