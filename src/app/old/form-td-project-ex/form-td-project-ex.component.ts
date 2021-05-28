import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-td-project-ex',
  templateUrl: './form-td-project-ex.component.html',
  styleUrls: ['./form-td-project-ex.component.css']
})
export class FormTdProjectExComponent implements OnInit {
  @ViewChild('form') signupForm: NgForm;
  projectStatus: string[] = [
    'Stable',
    'Critical',
    'Finished'
  ];
  formValues: {};
  hasSubmitted = false;

  constructor() { }

  ngOnInit(): void {

  }



  onSubmit(): void {
    this.formValues = Object.assign({}, this.signupForm.value);
    this.hasSubmitted = true;
    this.signupForm.reset();
    console.log(this.formValues);
  }
}
