import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  constructor(private fb: FormBuilder) { }

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones:[false, Validators.requiredTrue]
  });

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      condiciones:true
    });

   /* this.miFormulario.get('condiciones').valueChanges.subscribe(
      value => console.log(value)
    )
*/
    this.miFormulario.valueChanges.subscribe(
      ({condiciones,...rest}) => {
        //delete form.condiciones;
        this.persona = rest;
        this.condiciones = condiciones;
      }
    );
  }

  persona = {
    genero: 'F',
    notificaciones: true
  };

  condiciones: boolean = false;

  guardar() {
    const formulario = { ...this.miFormulario.value };

    this.persona = formulario;
  }


}
