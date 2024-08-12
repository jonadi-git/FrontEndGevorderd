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
  locale: string = "°C"

  reactorTemperatuur: number | string | undefined;
  reactorMelding: string | undefined;

  addNewReactor(){
    this.reactors.push(this.newReactor);
    this.newReactor = "";
  }

 /*  constructor () {

    window.setInterval(() => {
      const huidigTemperatuur = (Math.floor((Math.random() * 1000) + 1));
      this.reactorTemperatuur = huidigTemperatuur.valueOf() + this.locale;
    },1000);

    window.setInterval(() => {
    const gekozenTemp = new String ();
      this.reactorMelding = gekozenTemp.toLocaleString();
    });

  }
  changeLocale(locale: string) {
    this.locale = locale;
  } */
}
