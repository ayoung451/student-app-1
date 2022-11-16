import { Component, OnInit } from '@angular/core';
import { StudentData } from './models/student.model';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private studentService: StudentService) {

  }

  studentName: string = 'suzy';
  studentData?:StudentData;

  ngOnInit(): void {
    this.getStudentData(this.studentName);
    this.studentName = '';
  }

  onSubmit() {
    this.getStudentData(this.studentName);
    this.studentName = '';
  }


  private getStudentData(cityName: string) {
    this.studentService.getStudentData(cityName)
    .subscribe({
      next: (response) => {
  
        this.studentData = response;
  
        console.log(response);
      }
    })
  }


}
