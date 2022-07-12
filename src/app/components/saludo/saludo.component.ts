import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {


  // propiedades
  nombre: string = "";
  edad: number = 40;
  listaImagenes: any[] = []; 
  color: string = "rojo"


  constructor() { 
    this.nombre = "Mario"
    console.log(this.nombre);

    this.listaImagenes =[
      {url: `https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg`,
      alt: "Perrrito Feliz"},
      {url:"https://upload.wikimedia.org/wikipedia/commons/c/c7/Tabby_cat_with_blue_eyes-3336579.jpg",
      alt:"Gato"}
    ]
    
  }

  ngOnInit(): void {
  }

  nombreCompleto(){
    let apellido: string = "Perez";
    return ` ${this.nombre} <strong>${apellido}</strong>`
  }
}
