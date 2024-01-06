import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {Help} from "../models/help";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  private API_URL = "http://localhost:8081/help/";
  private addUrl = this.API_URL + 'add';
  private listUrl = this.API_URL + 'list';
  private deleteUrl = this.API_URL + 'delete';
  private deleteCommentUrl = this.API_URL + 'deleteComment';
  private addCommentUrl = this.API_URL + 'addComment';
  private getById = this.API_URL + 'getById';
  private changeStatus = this.API_URL + 'changeStatus';
  constructor(private http: HttpClient,private localStorageService:LocalStorageService) { }

  addPost(post:Help,imageFile:File): Observable<any> {
      const formData: FormData = new FormData();
      formData.append("file", imageFile);
      formData.append("helpPost", JSON.stringify(post));
      const headers = new HttpHeaders({
          'Authorization': 'Bearer ' + this.localStorageService.getToken()
      });

      return this.http.post<any>(`${this.addUrl}`, formData,{headers});
  }

  getHelpPosts(): Observable<any[]> {
    const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.localStorageService.getToken()
    });

    return this.http.get<any[]>(`${this.listUrl}`, { headers });
  }

  deleteHelpPost(id: string ): Observable<string> {
    const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.localStorageService.getToken()
    });
      console.log(headers)

    return this.http.delete<string>(`${this.deleteUrl}/${id}`, { headers });
  }
}
