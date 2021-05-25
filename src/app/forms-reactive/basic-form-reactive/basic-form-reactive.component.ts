import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-basic-form-reactive',
  templateUrl: './basic-form-reactive.component.html',
  styleUrls: ['./basic-form-reactive.component.css']
})
export class BasicFormReactiveComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUserNames = ['Tom', 'Anna'];

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl(this.genders[0]),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => {console.log(value)}
    // );
    this.signupForm.statusChanges.subscribe(
      (value) => {console.log(value)}
    );

    this.signupForm.setValue({
      userData: {
        username: 'SuperUser SetValue',
        email: "superuser@yahoo.com"
      },
      gender: 'female',
      hobbies: []
    });
  }

  onSubmit(): void {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby(): void {
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get('hobbies') as FormArray).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) =>
      {
        setTimeout(() => {
          if (control.value === 'test@test.com') {
            resolve({'emailIsForbidden': true});
          } else {
            resolve(null);
          }
        }, 1500);
      }
    );
    return  promise;
  }
}
