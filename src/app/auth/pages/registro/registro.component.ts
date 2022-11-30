import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';
import { ValidatorService } from '../../../shared/validator/validator.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {

 

  constructor(private fb: FormBuilder,
    private vs: ValidatorService,
    private eS: EmailValidatorService) { }
  
  miFormulario: FormGroup = this.fb.group(
    {
      nombre: ['', [Validators.required, Validators.pattern(this.vs.nomPattern)]],
      email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)],[ this.eS ]],
      username: ['', [Validators.required, this.vs.noPuedeSerStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validators:[this.vs.campoIguales('password','confirmPassword')]
    }
  )

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Gaby Alarcon',
      email: 'test1@test.com',
      username: 'gaby30',
      password: '123456',
      confirmPassword: '123456'
    })
  }

  get emailErrorMsg(): string{
    
    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.required) {
      return 'Campo obligatorio';
    }
    else if (errors.pattern) {
      return 'El campo no tiene formato de correo'
    }
    else if (errors?.emailTomado) {
      return 'El correo ingresado ya existe'
    }

    return '';
  }

  guardarDatos() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  /*emailRequerido() {
    return this.miFormulario.get('email')?.errors?.required
      && this.miFormulario.get('email')?.touched;
  }

  emailFormato() {
    return this.miFormulario.get('email')?.errors?.pattern
      && this.miFormulario.get('email')?.touched;
  }

  emailTomado() {
    return this.miFormulario.get('email')?.errors?.emailTomado
      && this.miFormulario.get('email')?.touched;
  }*/
}
