import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {PhoneValidator} from './phone.validator';

@Directive({
  selector: '[appPhone]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneDirective, multi: true }]
})
export class PhoneDirective implements Validator {
  private validator = PhoneValidator();

  validate(c: AbstractControl): ValidationErrors | null {
    return this.validator(c);
  }
}
