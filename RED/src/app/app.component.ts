import { Component } from '@angular/core';

interface Iniciativa {
  nombre: string,
  direccion: string,
  telefono?: string,
  descripcion: string,
  contacto?: string,
  comentarios?: string,
}

interface FormMaterial {
  nombre: string,
  material: string[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RED';

  formLabel: string[] =[
    'nombre',
    'direccion/ ubicacion',
    'telefono',
    'breve descripcion',
    'web/ email/ RRSS',
    'otros/ comentarios/ Sugerencias/ etc',
  ]

  material: FormMaterial[] = [
    {
      nombre: 'Tipo de Material',
      material: [
        'Material 1',
        'Material 2',
        'Material 3',
      ]
    }
  ]

  iniciativa: Iniciativa[] = []

}
