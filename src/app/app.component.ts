import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet   } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PI-arrumado';
}
