import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudPruebaempService {

  constructor(private http: HttpClient) { }

  public ObtenerInformacion() {
    return this.http.get<any>(`${environment.API_URL}/api/Info_Grafica`)
  }
}
