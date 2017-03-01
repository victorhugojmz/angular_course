import { Component, OnInit } from '@angular/core';
import { NgForm }  from '@angular/forms';
import { Empleado } from './../cliente';
@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  private departamentos : string[] = ['TI','Desarrollo','Ventas','Customer Service','RRHH','Seguridad']
  public empleado = new Empleado(12,'Ricardo Emmanuel Lopez Lopez','','Alejandro Dumas No.983, Polanco','','');
  public submitted: boolean;
  constructor() {  this.submitted = false; }
  ngOnInit(){
  }
  OnSubmit(EmpleadoForm): void {
     this.submitted = true;
     console.log(EmpleadoForm.valid);
  }
}