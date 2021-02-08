import { Component, OnInit } from '@angular/core';
import { Sede } from 'src/app/models/sede.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import { BusquedasService } from '../../services/busquedas.service';
import { Usuario } from '../../models/usuario.model';
import { Ciudad } from 'src/app/models/ciudad.model';
import { NgForm } from '@angular/forms';
import { CreacionService } from '../../services/creacion.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuarios: Usuario[] = [];

  public usuario = new Usuario();

  public ciudad = new Ciudad();

  public sede = new Sede();

  constructor(private router: Router, private BusquedasService: BusquedasService, private CreacionService: CreacionService) { }

  ngOnInit() {
  }

  buscarUsuariosPorSede(termino:string){
    if( termino.length ===0){
      return ;
    }
    this.BusquedasService.buscar('sede', termino, 'NA')
        .subscribe( resp => {
          this.usuarios = resp;
        });
  }

  createUsuario(form: NgForm){
    if(form.invalid) {
      return ;
    }

    this.CreacionService.crearUsuario('usuarios', this.usuario.username, this.usuario.password, this.ciudad.name, this.sede.name)
        .subscribe(resp=>{
          console.log("RESP", resp)
          if(resp['ok']===true) {
            Swal.fire('Usuario creada', 'Usuario creado satisfactoriamente', 'success');
          } else {
            Swal.fire('Lo sentimos', 'Este usuario ya ha sido creada', 'error');
          }
        });
  }

}
