import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    if(form.invalid) {
      return ;
    }

    this.auth.login(this.usuario)
        .subscribe(resp => {
          console.log(resp);

          if(resp['ok'] === true){
            this.router.navigateByUrl('/home');
          }
        }, (err) => {
          Swal.fire('Error', err.error.msg, 'error');
        });
  }

}
