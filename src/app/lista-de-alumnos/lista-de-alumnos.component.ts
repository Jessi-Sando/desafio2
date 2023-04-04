import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.css']
})
export class ListaDeAlumnosComponent {

empresas: any [] = [
  {
    "nombre":"Turysol...",
    "antiguedad":"7"
  },
  {
    "nombre":"House....",
    "antiguedad":"5",
  },
{"nombre":"Click V...",
"antiguedad":"9"
}

]

}
