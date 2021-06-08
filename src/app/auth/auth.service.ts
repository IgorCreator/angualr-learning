import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AuthReqData} from './auth-req.data';

interface AuthRespData{
  idToken: string;
  email: string;
  refreshToken:	string;
  expiresIn:	string;
  localId:	string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  error = new Subject<string>();
  apiKey = 'AIzaSyAenXOPDSQmV8L77laWx_-m5X5nX1k4MqQ';
  authServiceUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.apiKey;

  constructor(private http: HttpClient) {
  }

  signup(authObj: AuthReqData) {
    return this.http.post<AuthRespData>(this.authServiceUrl, authObj)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }
}
