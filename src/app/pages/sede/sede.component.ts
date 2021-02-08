import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BusquedasService} from '../../services/busquedas.service';
import { Sede } from '../../models/sede.model';
import { NgForm } from '@angular/forms';
import { CreacionService } from '../../services/creacion.service';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent implements OnInit {

  public sedes: Sede[] = [];

  public sede = new Sede();

  constructor(private router: Router, private BusquedasService: BusquedasService, private CreacionService: CreacionService) { }

  ngOnInit() {
  }

  createSede(form: NgForm){
    if(form.invalid) {
      return ;
    }

    this.CreacionService.crearSede('sede', this.sede.name)
        .subscribe(resp => {
          if(resp['ok']===true) {
            Swal.fire('Sede creada', 'Sede creada satisfactoriamente', 'success');
          } else {
            Swal.fire('Lo sentimos', 'Esta sede ya ha sido creada', 'error')
          }
        });
      
  }

  buscarSedes(termino: string){
    this.BusquedasService.buscar('sede', termino, 'ciudad')
        .subscribe(resp=>{
          this.sedes = resp;
        });
  }

}
