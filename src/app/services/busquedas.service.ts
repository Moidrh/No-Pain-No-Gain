import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  constructor( private http: HttpClient) { }

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

  buscar(
    tipo: 'usuarios'|'ciudad'|'sede',
    termino: string,
    complement: 'usuarios'|'ciudad'|'sede'|'NA' ) {
    
      if(complement==='NA') {

        if( termino.length ==0){
          const url = `${base_url}/${tipo}/search`;
          return this.http.get<any[]>(url, this.headers)
              .pipe(
                map( (resp: any) => resp.resultados)
              );
        }
        const url = `${base_url}/${tipo}/search/${termino}`;
        return this.http.get<any[]>(url, this.headers)
              .pipe(
                map( (resp: any) => resp.resultados)
              );

      } else {
        const url = `${base_url}/${tipo}/search/${complement}/${termino}`;
        console.log(url);
        return this.http.get<any[]>(url, this.headers)
              .pipe(
                map( (resp: any) => resp.resultados)
              );
      }
    
  }

}
