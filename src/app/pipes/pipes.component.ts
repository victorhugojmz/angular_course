import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) { }
  productoForm: FormGroup;
  ngOnInit() {
  }
  private crearFormulario() {
    this._formBuilder.group({
            sku: [''],
            
            
      })
  }
}  