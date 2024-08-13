import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-reactor',
  standalone: true,
  imports: [],
  templateUrl: './reactor.component.html',
  styleUrl: './reactor.component.css'
})
export class ReactorComponent implements OnInit, OnDestroy {
  @Input()
  reactorType: string = "Reactor: 0";
  
  static startTemperatuur = 0;
  static lastId = 0;
  reactorId: number | undefined;
  reactorTemperatuur: number | string | undefined;
  reactorStatus: string |undefined;
  reactorPowerGridId: number | undefined;

  reactorMelding: string | undefined;

  meltDown: boolean = false;

  locale: string = "°C"
  localeR: string = "Running"

  intervalId: number | undefined;
  
  /* constructor () {
    this.reactorId = ReactorComponent.lastId++;
    this.reactorPowerGridId = ReactorComponent.lastId++;
    this.reactorTemperatuur = ReactorComponent.startTemperatuur;



    this.intervalId = window.setInterval(() => {
      const huidigTemperatuur = (Math.floor((Math.random() * 1000) + 1));
      this.reactorTemperatuur = huidigTemperatuur.valueOf() + this.locale;
    },1000);

    window.setInterval(() => {
    const gekozenTemp = new String ();
      this.reactorMelding = gekozenTemp.toLocaleString();
    });

     window.setInterval(() => {
      const statusReactor = new String ();
        this.reactorStatus = statusReactor.toLocaleString() + this.localeR;
      }); 

  } */

  
  ngOnInit(): void {
    this.reactorId = ReactorComponent.lastId++;
    this.reactorPowerGridId = ReactorComponent.lastId++;
    this.reactorTemperatuur = ReactorComponent.startTemperatuur;



    this.intervalId = window.setInterval(() => {
      const huidigTemperatuur = (Math.floor((Math.random() * 1000) + 1));
      this.reactorTemperatuur = huidigTemperatuur.valueOf() + this.locale;
      
    this.meltDown = huidigTemperatuur >= 830 || huidigTemperatuur <= 150;

    },1000);
    this.reactorStatus = 'Running';

    window.setInterval(() => {
    const gekozenTemp = new String ();
      this.reactorMelding = gekozenTemp.toLocaleString();
    });
    




   /*  if (this.intervalId > 830) {
      this.reactorStatus = 'Meltdown';
      this.ngOnDestroy();
    } else if (this.intervalId < 150) {
      this.reactorStatus = 'Cooldown';
    } */
  }

    ngOnDestroy(): void {
    clearInterval(this.intervalId);
    this.reactorStatus = 'Stopped'
  
  }


  changeLocale(locale: string) {
    this.locale = locale;
  
  }


}
