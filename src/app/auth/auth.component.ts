import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';
import {AuthReqData} from './auth-req.data';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode = true;


  constructor(private authService: AuthService) {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmitAction(form: NgForm) {
    if (form.invalid) {
      return;
    }

    if (this.isLoginMode) {
      //...
    } else {
      this.authService.signup(new AuthReqData(form.value.email, form.value.password));
    }
    form.reset();
  }
}
