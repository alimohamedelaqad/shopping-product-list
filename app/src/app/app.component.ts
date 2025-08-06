import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemCardComponent } from './item-card/item-card.component'
import { NavbarComponent } from './navbar/navbar.component'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemCardComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day5Task2';
}
