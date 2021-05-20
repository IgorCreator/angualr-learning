import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent {
  @ViewChild('form') signupForm: NgForm;
  secretQuestValue = 'pet';
  questionAnswer = 'test';
  genders: string[] = [
    'male',
    'female'
  ];
  formValues: {};
  hasSubmitted = false;


  suggestUsername(): void {
    // property this.signupForm refers to @ViewChild('form') signupForm: NgForm;
    // setValue method takes the entire form object for replacement
    // this.signupForm.form.setValue({
    //   userData: {
    //     username: 'SuperUserInit',
    //     email: 'superuserinit@yahoo.com'
    //   },
    //   number: 12,
    //   secret: 'teacher',
    //   questionAnswer: 'This form\'s data was placed here by a click of suggestion!!!',
    //   gender: 'female'
    // });

    // patchValue method is a targeted approach to set values
    this.signupForm.form.patchValue(
      {
        userData: {
          username: 'SuperUser',
          email: 'superuser@yahoo.com'
        }
      }
    );
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit(): void {
    this.formValues = Object.assign({}, this.signupForm.value);
    this.hasSubmitted = true;
    this.signupForm.reset();
    console.log(this.formValues);
  }
}
