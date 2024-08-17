import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactorComponent } from '../reactor/reactor.component';

@Component({
  selector: 'app-reactoren',
  standalone: true,
  imports: [ReactorComponent, FormsModule],
  templateUrl: './reactoren.component.html',
  styleUrl: './reactoren.component.css'
})
export class ReactorenComponent {
  reactors: Array<string> = [];
  newReactor: string = "";

  addNewReactor(){
    this.reactors.push(this.newReactor);
    this.newReactor = "";
    
  }



}
