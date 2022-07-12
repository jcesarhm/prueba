import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {


  numero: number = 1;
 
  constructor() { }

  ngOnInit(): void {
  }

  handleClick($event: any){
    this.numero = ($event.target.innerText === 'Aumentar') ? this.numero + 1 : this.numero - 1; 
  }


}
