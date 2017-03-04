import { Component, OnInit, ViewChild, AfterViewChecked} from '@angular/core';
import { NgForm }  from '@angular/forms';
import { Empleado } from './../cliente';
@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
}) 
export class ClienteFormComponent implements OnInit {
  @ViewChild('EmpleadoForm') currentForm: NgForm;
  private departamentos : string[] = ['TI','Desarrollo','Ventas','Customer Service','RRHH','Seguridad']
  public empleado = new Empleado(12,'Ricardo Emmanuel Lopez Lopez','','Alejandro Dumas No.983, Polanco','','');
  public submitted: boolean;
  EmpleadoForm: NgForm;
  control: Empleado;
  constructor() {  this.submitted = false; }
  ngOnInit(){}
  OnSubmit(EmpleadoForm: NgForm) {
    console.log(EmpleadoForm.value);
     this.submitted=true;
  }
  ngAfterViewChecked() {
    this.formChanged();
  }
  formChanged() {
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
              if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
              for (const key in control.errors) {
                  this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
         
  }
  formErrors = {
    'name': '',
    'powa': ''
  }
  validationMessages = {
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
  },
  'power': {
    'required': 'Power is required.'
    }  
  };
}