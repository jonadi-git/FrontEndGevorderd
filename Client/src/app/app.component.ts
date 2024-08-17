import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
/* import { ReactorComponent } from "./reactor/reactor.component";
import { FormsModule } from '@angular/forms'; */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

 
}
