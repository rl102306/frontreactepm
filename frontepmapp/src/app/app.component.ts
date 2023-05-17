import { JsonPipe } from '@angular/common';
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
  
  infogra:any;
  jsongra:any;
  
  titlepie : any;
  titlepie2: any;
  
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
      
      
      this.titlepie = res.pie

      this.titlepie2 = res.pie2
 
     
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



function forEach(values: { name: string; gender: string; }, arg1: (value: any, key: any) => void, log: any[]) {
  throw new Error('Function not implemented.');
}

