import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BusquedasService} from '../../services/busquedas.service';
import { Usuario } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { Ciudad } from 'src/app/models/ciudad.model';
import { Sede } from 'src/app/models/sede.model';
import { CreacionService } from '../../services/creacion.service';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {

  public usuarios: Usuario[] = [];

  public ciudad = new Ciudad();

  public sede = new Sede();

  constructor(private router: Router, private BusquedasService: BusquedasService, private CreacionService: CreacionService) { }

  ngOnInit() {
  }

  buscarUsuarioByCiudad(termino: string){
    this.BusquedasService.buscar('ciudad', termino, 'usuarios')
        .subscribe(resp=>{
          this.usuarios = resp
        });
  }

  createCiudad(form: NgForm) {
    if(form.invalid) {
      return ;
    }

    this.CreacionService.crearCiudad('ciudad', this.ciudad.name, this.sede.name)
        .subscribe(resp=>{
          if(resp['ok']===true) {
            Swal.fire('Ciudad creada', 'Ciudad creada satisfactoriamente', 'success');
          } else {
            Swal.fire('Lo sentimos', 'Esta ciudad ya ha sido creada', 'error');
          }
        });

  }

}
