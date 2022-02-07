import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormConditionsService {
  form: FormGroup;

  constructor(form: FormGroup) {
    this.form = form;
  }

  invalidForm(controls: any[]) {
    return Object.values(this.form.controls).forEach((control: any) => {
      if (control instanceof FormGroup) {
        Object.values(control.controls).forEach((control) => {
          control.markAsTouched();
          this.reset(controls);
        });
      } else {
        control.markAsTouched();
        this.reset(controls);
      }
    });
  }

  // GET CONTROLS

  control(control: string) {
    return this.form.controls[control].value;
  }

  controlSet(control: string, value: string) {
    this.form.controls[control].setValue(value);
  }

  // VALIDAR

  valid(control: string): boolean {
    const cf = this.form.get(control);
    return cf ? cf.invalid && cf.touched && cf.dirty : false;
  }

  // ERRORES

  error(control: string, campo: string) {
    const cf = this.form.get(control)?.errors || {};
    return this.setErrorCondition(cf, campo);
  }

  private setErrorCondition(obj: any, campo: string): string {
    const reqLength =
      obj?.minlength?.requiredLength || obj?.maxlength?.requiredLength || '';
    const condition = Object.keys(obj)[0];
    const ERRORS: any = {
      required: 'Este campo es requerido',
      minlength: `Este campo tiene un tamaño minimo de ${reqLength}`,
      maxlength: `Este campo tiene un tamaño maximo de ${reqLength}`,
      pattern: `Coloque un(a) ${campo} valido(a)`,
      noEsIgual: `Las contraseñas no coinciden`,
    };
    return ERRORS[condition];
  }

  // RESET
  private reset(controls: any[]) {
    let f: any = {};
    controls.forEach((control) => (f[control] = ''));
    this.form.reset(f);
  }
}
