import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Gabriela',
    favoritos: [
      { id: 1, nombre: 'Mario Bros' },
      { id: 2, nombre: 'Tetris' }
    ]
  };

  nuevoJuego: string = '';

  guardar(){
    console.log(this.persona)
  }

  eliminar(id:number) {
    this.persona.favoritos.splice(id, 1);
  }

  agregarJuego() {
    const nuevo: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };

    this.persona.favoritos.push({ ...nuevo });
    this.nuevoJuego = '';
  }
}
