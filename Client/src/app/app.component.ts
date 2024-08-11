import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactorComponent } from "./reactor/reactor.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  reactors: Array<string> = [];
  newReactor: string = "Reactor toevoegen...";

  addNewReactor(){
    this.reactors.push(this.newReactor);
    this.newReactor = "";
  }
}
