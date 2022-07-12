import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydatabiding',
  templateUrl: './twowaydatabiding.component.html',
  styleUrls: ['./twowaydatabiding.component.css']
})
export class TwowaydatabidingComponent implements OnInit {

  // * Para hace tow wat data biding necesito asociar a cada input una prpiedad, cuando la propiedad cambie el valor tiene que cambiar en el input y cuando el input cambie el valor de la propiedad se tiene que actualizar.
  // NECESARIO: 1- importar en module la libreria FormsModule
  //            2- usar la directiva [(ngModel)]

  resultado: number = 0;
  numero1: number = 0;
  numero2: number = 0;
  constructor() {}

  ngOnInit(): void {
  }

  sumar(){
    this.resultado = this.numero1 + this.numero2;
    this.numero1= 0;
    this.numero2= 0;
  }
  resta(){
    this.resultado = this.numero1 - this.numero2;
    this.numero1= 0;
    this.numero2= 0;
  }
  multiplicar(){
    this.resultado = this.numero1 * this.numero2;
    this.numero1= 0;
    this.numero2= 0;
  }

}
