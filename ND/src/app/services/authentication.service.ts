import { HttpClient } from '@angular/common/http';
import { Injectable , isDevMode } from '@angular/core';
import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environement/environment';
import { environment as e} from '../environement/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private api  = environment.apiKey; 
  private loginUrl = 'http://localhost:8080/login'; 
  private registerUrl = 'http://localhost:8080/account/register'
  
  constructor(private http: HttpClient) {

    if (isDevMode()) {
      console.log(environment.apiKey);
    } else {
      console.log(e.apiKey);
    }
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
