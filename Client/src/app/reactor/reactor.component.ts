import { Component, Input } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-reactor',
  standalone: true,
  imports: [],
  templateUrl: './reactor.component.html',
  styleUrl: './reactor.component.css'
})
export class ReactorComponent {
  @Input()
  reactorType: string = "Reactor: 0";

  static lastId = 0;
  reactorId: number | undefined;
  reactorTemperatuur: number | undefined;
  reactorStatus: 'Stopped' | 'Cooldown' | 'Running' | 'Meltdown' |undefined;
  reactorPowerGridId: number | undefined;


  constructor () {
    this.reactorId = ReactorComponent.lastId++;
    this.reactorPowerGridId = ReactorComponent.lastId++;

  

  }


}
