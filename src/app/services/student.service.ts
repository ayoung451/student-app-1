import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { StudentData } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudentData(studentName: string): Observable<StudentData[]>{  
    
    


    return this.http.get<StudentData[]>(environment.studentApiBaseUrl, {
      headers: new HttpHeaders(), params: new HttpParams()
      //.set('studentName', studentName)
    })
  }
}
