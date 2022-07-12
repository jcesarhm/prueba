import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  color:string = 'red';
  respuesta:string = "";
  constructor() {

   }

  ngOnInit(): void {
  }
  responder($event: any) : void{
    this.respuesta = $event.target.value;
  }

  cambiarColor($event: any){

  this.color = $event.target.value;
  }

}
