import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {CrudPruebaempService} from 'src/app/models/crud-pruebaemp.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Prueba Tecnica Electric Power Market';

  constructor(
    private CPEM: CrudPruebaempService,
    private router: Router
    ) { }

  ConsultarInformacion()
    
  {
    
  this.CPEM.ObtenerInformacion().subscribe({
    
    next: (res: any) => {

      console.log("Que informacion trae")
     
      console.log(res)

      Swal.fire(
        { 
          title: 'Felicidades!', 
          text: 'La informacion ha sido consultada.', 
          icon: 'success', 
          confirmButtonText: 'Cerrar' 
        }
      );

     
    },
      error: (err) => {
        Swal.fire(
          { 
            title: 'Oops...', 
            text: '¡Algo salió mal!, por favor intenta de nuevo.', 
            icon: 'error', 
            confirmButtonText: 'Cerrar' 
          }
        )
      }
  })
}
}



