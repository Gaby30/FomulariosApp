import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Pantalon',
      precio: 145590
    });
  }

  /*miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('RT 4080ti'),
    precio: new FormControl(1500),
    existencias: new FormControl(5)
  });*/

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)],],
    precio: [, [Validators.required, Validators.min(0)],],
    existencias: [, [Validators.required, Validators.min(0)],]
  });

  campoNoValido(campo:string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario);
    this.miFormulario.reset();
  }







}
