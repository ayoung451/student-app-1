import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StudentData } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudentData(studentName: string): Observable<StudentData> {
    return this.http.get<StudentData>(environment.studentApiBaseUrl, {
        headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
        params: new HttpParams()
        .set('q', studentName)
      } )
  }

//   getWeatherData(cityName: string): Observable<WeatherData> {
    // return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
    //   headers: new HttpHeaders()
    //   .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
    //   .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
    //   params: new HttpParams()
    //   .set('q', cityName)
    // } )
//   }



}
