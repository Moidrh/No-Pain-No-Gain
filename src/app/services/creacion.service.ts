import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class CreacionService {

  constructor(private http: HttpClient) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return{
      headers: {
        'x-token': this.token
      }
    }
  }

  crearSede(
    tipo: 'sede',
    name: string
  ) {

    const valor= {
      name: name
    }
    const url = `${base_url}/${tipo}/add`;
    return this.http.post(url, valor, this.headers).pipe(
                  map( resp => {
                    return resp;
                  })
                );
  }

  crearCiudad(
    tipo: 'ciudad',
    nameCiudad: string,
    nameSede: string
  ){

    const valores = {
      nameCiudad,
      nameSede
    }

    const url = `${base_url}/${tipo}/add`;
    return this.http.post(url, valores, this.headers).pipe(
      map( resp => {
        return resp;
      })
    );

  }

  crearUsuario(
    tipo: 'usuarios',
    username: string,
    password: string,
    nameCiudad: string,
    nameSede: string
  ){
    const valores = {
      username,
      password,
      nameCiudad,
      nameSede
    }

    const url = `${base_url}/${tipo}/add`;

    return this.http.post(url, valores, this.headers).pipe(
      map(resp => {
        return resp;
      })
    );
  }
}
