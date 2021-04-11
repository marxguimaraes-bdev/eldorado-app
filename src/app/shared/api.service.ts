import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Device } from '../shared/device';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl = "http://localhost:1234"

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
