import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appNameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: NameValidatorDirective,
      multi: true
    }
  ]
})
export class NameValidatorDirective implements Validator {

  validator: ValidatorFn;
  constructor() {
    this.validator = this.nameValidator();
  }

  validate(c: FormControl): ValidationErrors {
    return this.validator(c);
  }

  nameValidator(): ValidatorFn {
    return (control: FormControl) => {
      if (control.value != null && control.value !== '') {
        if (control.value !== 'Test') {
          return null;
        } else {
          return {
            nameValidator: { valid: false }
          };
        }
      } else {
        return null;
      }
    };
  }
}
