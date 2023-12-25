import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private loginUrl = 'http://localhost:8080/user/login'; 
  private registerUrl = 'http://localhost:8080/user/register'
  
  constructor(private http: HttpClient) { }




  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };

    return this.http.post<any>(`${this.loginUrl}`, loginData)
      .pipe(
        tap(response => this.handleAuthentication(response)),
        catchError(this.handleError('Login', []))
      );
  }


  register(email: string, password: string): Observable<any> {
    const registerData = { email, password };

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
