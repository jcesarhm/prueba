import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usuarios: any[] = [];

  constructor() {
    this.usuarios = [
     { 
      id: 1,
      photo: 'https://randomuser.me/api/portraits/women/23.jpg{{hash}}',
      name: 'Juan Antonio',
      mail: 'juan@gmail.com',
      gener: 'F',
      phone: 4356452
     },
     { 
      id: 2,
      photo: 'https://randomuser.me/api/portraits/women/23.jpg',
      name: 'pepe',
      gener: 'F',
      mail: 'pepe@gmail.com',
      phone: 4356452
     },
     { 
      id: 3,
      photo: 'https://randomuser.me/api/portraits/women/23.jpg',
      name: 'Antonia',
      gener: 'M',
      mail: 'antonia@gmail.com',
      phone: 4356452
     },
     { 
      id: 4,
      photo: 'https://randomuser.me/api/portraits/women/23.jpg',
      name: 'Cristina',
      mail: 'cristina@gmail.com',
      // gener: 'M',
      phone: 4356452
     }


    ]
   }

  ngOnInit(): void {
  }

  cargarUsuarios(genero:string =""):string{
    // recoger mi array para crear articles dentro de una variables
    let articles = ""
    console.log('genero desde cargarUsiario', genero);
    
    this.usuarios.forEach(usuario =>{
      articles += ` <article>
                      <figure>
                        <img src="$usuario.photo" alt="${usuario.name}">
                      </figure>
                      <h3>${usuario.name}</h3>
                      <ul>
                        <li>Telefono:${usuario.phone}</li>
                        <li>Email:${usuario.mail}</li>
                      </ul>
                      
                      <hr>
                   </article>`
    })

    return  articles
  }


  cargarGenero($event: any){
    this.cargarUsuarios($event.target.value)
  }
}
