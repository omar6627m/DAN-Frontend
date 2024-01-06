import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly tokenKey = 'token';
  private readonly expirationKey = 'tokenExpiration';
  private readonly USER_KEY = 'user';
  user! : User;
  constructor() { }



  //setToken , getToken , clearData, setUser and getUser for other Inf


  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    const expirationDate = new Date(Date.now() + 60 * 60 * 1000); // 60 minutes
    localStorage.setItem(this.expirationKey, expirationDate.toISOString());
  }

  getToken(): string | null {
    const expiration = localStorage.getItem(this.expirationKey);
    if (expiration && new Date(expiration) > new Date()) {
      return localStorage.getItem(this.tokenKey);
    }
    this.clearData();
    return null;
  }

  removeToken(): void {
     localStorage.removeItem(this.tokenKey);
     localStorage.removeItem(this.expirationKey);
   }

  setUser(user: User): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }

  getUser(): User | null {
      const userJson = localStorage.getItem(this.USER_KEY);
      return userJson ? JSON.parse(userJson) : null;
    }




    //Logout
  clearData(): void {
    localStorage.clear();
  }
}
