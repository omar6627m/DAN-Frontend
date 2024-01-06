import { HttpClient } from '@angular/common/http';
import {Injectable, isDevMode} from '@angular/core';
import { Observable,of } from 'rxjs';
import {environment as dev_env} from "../env/dev";
import {environment as prod_env} from "../env/prod";

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private API_URL = "http://localhost:8080/";
  private loginUrl = this.API_URL + 'login';
  private registerUrl = this.API_URL + 'account/register';

  constructor(private http: HttpClient) {
    // if (isDevMode()) {
    //   this.API_URL = dev_env.apiKey;
    // } else {
    //   this.API_URL = prod_env.apiKey;
    // }
    // this.loginUrl = this.API_URL + 'users-microservice/login';
    // this.registerUrl = this.API_URL + 'users-microservice/account/register'
  }




  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };

    return this.http.post<any>(`${this.loginUrl}`, loginData)
      .pipe(
        tap(response => this.handleAuthentication(response)),
        catchError(this.handleError('Login', []))
      );
  }


  register(email: string, password: string,first_name:string, last_name:string): Observable<any> {
    const registerData = { email, password ,first_name,last_name};

    return this.http.post<any>(`${this.registerUrl}`, registerData)
      .pipe(
        tap(response => this.handleAuthentication(response)),
        catchError(this.handleError('Register', []))
      );
  }



   private handleAuthentication(response: any): void {
      //Store Token
      //Store Use Infos(Role, name , email  ...)


  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
