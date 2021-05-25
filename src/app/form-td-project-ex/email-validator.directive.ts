import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: EmailValidatorDirective,
      multi: true
    }
  ]
})
export class EmailValidatorDirective implements Validator {

  validator: ValidatorFn;
  constructor() {
    this.validator = this.emailValidator();
  }

  validate(c: FormControl): ValidationErrors {
    return this.validator(c);
  }

  emailValidator(): ValidatorFn {
    return (control: FormControl) => {
      if (control.value != null && control.value !== '') {
        const isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(control.value);
        if (isValid) {
          return null;
        } else {
          return {
            emailvalidator: { valid: false }
          };
        }
      } else {
        return null;
      }
    };
  }

  async forbiddenEmails(control: FormControl): Promise<any> {
    return await new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (control.value != null && control.value !== '') {
            const isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(control.value);
            if (isValid && control.value !== 'test@test.com') {
              resolve(null);
            } else {
              resolve({
                emailValidator: { valid: false }
              });
            }
          } else {
            resolve(null);
          }
        }, 1500);
      }
    );
  }
}
