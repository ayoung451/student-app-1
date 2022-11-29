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


  private getStudentData(studentName: string) {
    this.studentService.getStudentData(studentName)
    .subscribe({
      next: (response) => {
  
        this.studentData = response[0];

        console.log("Here is the rresponse");
        console.log(response);
        console.log("Here is the studentData.age");
        console.log(this.studentData.age);
        console.log("Here is the response.age");
        //console.log(response[0].age);
      }
    })
  }

}
