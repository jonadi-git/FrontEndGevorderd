import { Component,Input, OnDestroy, OnInit } from '@angular/core';
import { last, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-reactor',
  standalone: true,
  imports: [],
  templateUrl: './reactor.component.html',
  styleUrl: './reactor.component.css'
})
export class ReactorComponent implements OnInit, OnDestroy {
  @Input()
  reactorType: string = "";


  
  static startTemperatuur = 0;
  static startMeltdownTemperatuur = 831;
  static lastId = 0;
  reactorId: number | undefined;
  reactorTemperatuur: number | string | undefined;
  reactorStatus: string |undefined;
  reactorPowerGridId: number | undefined;

  reactorMelding: string | undefined;

  

  coolDown: boolean = false;
  meltDown: boolean = false;

  locale: string = "°C"
 
  intervalId: number | undefined;
  newIntervalId: number | undefined;


  
  
  ngOnInit(): void {
    this.reactorId = ReactorComponent.lastId++;
    this.reactorPowerGridId = ReactorComponent.lastId++;
    this.reactorTemperatuur = ReactorComponent.startTemperatuur;



    this.intervalId = window.setInterval(() => {
      const huidigTemperatuur = (Math.floor((Math.random() * 1000) + 1));
      this.reactorTemperatuur = huidigTemperatuur.valueOf() + this.locale;
      
    this.coolDown = huidigTemperatuur <= 150;
    this.meltDown = huidigTemperatuur >= 830;
    
    },2000);
    this.reactorStatus = 'Running';

    window.setInterval(() => {
    const gekozenTemp = new String ();
      this.reactorMelding = gekozenTemp.toLocaleString();
    });
    this.resetButton;
    
  }

    ngOnDestroy(): void {
    clearInterval(this.intervalId);
    this.reactorStatus = 'Stopped'
    this.startCooldownButton;
    
  
  }



  changeLocale(locale: string) {
    this.locale = locale;
  
  }


  startCooldownButton(): void {
    this.reactorId = ReactorComponent.lastId++;
    this.reactorPowerGridId = ReactorComponent.lastId++;
    this.reactorTemperatuur = ReactorComponent.startTemperatuur;



    this.intervalId = window.setInterval(() => {
      const huidigTemperatuur = (Math.floor((Math.random() * 150) + 1));
      this.reactorTemperatuur = huidigTemperatuur.valueOf() + this.locale;
  

    },2000);
    this.reactorStatus = 'Cooldown';

    window.setInterval(() => {
    const gekozenTemp = new String ();
      this.reactorMelding = gekozenTemp.toLocaleString();
    });
  }


  startMeltdownButton(): void {
    this.reactorId = ReactorComponent.lastId++;
    this.reactorPowerGridId = ReactorComponent.lastId++;
    this.reactorTemperatuur = ReactorComponent.startMeltdownTemperatuur;



    this.newIntervalId = window.setInterval(() => {
      const huidigTemperatuur = (Math.floor((Math.random() * 1000) + 831));
      this.reactorTemperatuur = huidigTemperatuur.valueOf() + this.locale;
      
    

    },2000);
    this.reactorStatus = 'Meltdown';

    window.setInterval(() => {
    const gekozenTemp = new String ();
      this.reactorMelding = gekozenTemp.toLocaleString();
    });
  }

  resetButton(): void {
    this.ngOnInit;
    
  
  }

}
