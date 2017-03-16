import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { NgForm }  from '@angular/forms';
import { Empleado } from './../cliente';
import 'rxjs/add/operator/switchMap';
export interface FormErrors { 
  nombre: string;
  email: string;
}
@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
}) 
export class ClienteFormComponent implements OnInit , AfterViewChecked {
  @ViewChild('EmpleadoForm') private currentForm: NgForm;
  private departamentos : string[] = ['TI','Desarrollo','Ventas','Customer Service','RRHH','Seguridad']
  public empleado = new Empleado(12,'Ricardo Emmanuel Lopez Lopez','','Alejandro Dumas No.983, Polanco','','');
  public submitted: boolean;
  EmpleadoForm: NgForm;
  control: Empleado;
  constructor() {  this.submitted = false; }
  ngOnInit(){}
  OnSubmit(EmpleadoForm: NgForm) {
    console.log(EmpleadoForm.form.get('nombre'));
     this.submitted=true;
  }
  public ngAfterViewChecked(): void {
    this.formChanged();
  }
  private formChanged() {
    if (this.currentForm === this.EmpleadoForm) { return; }
      this.EmpleadoForm = this.currentForm;
    if (this.EmpleadoForm) {
      this.EmpleadoForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }
}
  onValueChanged(data? :  any){
       if(!this.EmpleadoForm){ return ;}
        const form = this.EmpleadoForm.form;
       for(const field in this.formErrors){
              this.formErrors[field] = '';
              const control = form.get(field);
              if (control && (control.dirty || control.untouched) && !control.valid) {
                const messages = this.validationMessages[field];
              for (const key in control.errors) {
                  this.formErrors[field] += messages[key];
                }
            }
        }
  }
  public formErrors: FormErrors = {
    nombre: '',
    email: ''
  }
  validationMessages = {
    'nombre': {
      'required':      'Es requerido ingresar el nombre',
      'minlength':     'El nombre debe ser mayor a 4 caracteres.',
      'maxlength':     'El nombre debe ser menor a 24 caracteres.'
  },
    'email': {
      'required': 'Es requerido ingresar un email.'
    }  
  };
}