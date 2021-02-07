import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userToken: string;

  constructor(private http: HttpClient) { }

  logout() {
    
  }

  login( usuario: Usuario) {
    const authData = {
      ...usuario
    };

    return this.http.post(`${ base_url }/authentication/login`, authData).pipe(
      map( resp=>{
        this.guardarToken(resp['token']);
        return resp;
      })
    );
  }

  private guardarToken ( idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  leerToken() {
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }
}
