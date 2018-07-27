import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

const expression = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;

export function PhoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    const valid = expression.test(control.value)
      && control.value.length < 14;
    return valid ? null : {phone: true};
  };
}
