import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Device } from '../shared/device';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Category } from '../shared/category';

import config from '../../assets/config';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl = config.apiUrl

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  getAllDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(`${this.apiUrl}/device`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getDevice(id: number): Observable<Device> {
    return this.http.get<Device>(`${this.apiUrl}/device/${id}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  createDevice(device): Observable<Object> {
    return this.http.post<Object>(
      `${this.apiUrl}/device`,
      JSON.stringify(device),
      this.httpOptions
    ).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  deleteDevice(id: number){
    return this.http.delete(
      `${this.apiUrl}/device/${id}`,
      {
        ...this.httpOptions,
        responseType: 'text',
      },
    ).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/category`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  createCategory(category): Observable<Object> {
    return this.http.post<Object>(
      `${this.apiUrl}/category`,
      JSON.stringify(category),
      this.httpOptions
    ).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  deleteCategory(id: number){
    return this.http.delete(
      `${this.apiUrl}/category/${id}`,
      {
        ...this.httpOptions,
        responseType: 'text',
      },
    ).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `API return an error:
        Code: ${error.status}
        Message: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
