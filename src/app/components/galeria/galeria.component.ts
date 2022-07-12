import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  url: string = ""
  imagenActual: number =1; 
  constructor() { 
  this.url = `./assets/images/imagen_${this.imagenActual}.jpg`
  }
  ngOnInit(): void {
  }

  cambiarImagen($event: any){
    let boton = $event.target.innerText 
    if (boton === 'anterior'){
      this.imagenActual = (this.imagenActual === 1) ? 4 : this.imagenActual -1;

      //iremos para atras
      this.imagenActual--;  
    } else {

      this.imagenActual = (this.imagenActual === 4) ? 4 : this.imagenActual +1;

      // iremos para delante
      this.imagenActual++;
      
    }
    this.url = `./assets/images/imagen_${this.imagenActual}.jpg`
  }
}
