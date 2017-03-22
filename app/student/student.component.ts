import { Component }      from '@angular/core';

import { Student }        from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'my-student',  
  templateUrl: 'app/student/student.component.html',
  styleUrls: [ 'app/student/student.component.css' ],
  providers: [ StudentService ]
})
export class StudentComponent  { 
  student1: Student;
  student2: Student;
  students: Student[] = [];
  studId: number = 1;

  constructor(private studentService: StudentService) {
    // this.student1.id = 1;
    // this.student1.firstName = "Jynn";
    // this.student1.lastName = "Erso";
    // this.student1.studieRichting = "Demolition";
    // this.student1 = this.studentService.getStudent(1);
    this.studentService.getStudentById(1).subscribe(student => {
      console.log("Student call success");
      console.log(student);
      this.student1 = student;
    });
    this.student2 = this.studentService.getStudent(2);
    console.log(this.student1);
  }

  loadStudent2() {
    if (this.student2 != undefined) console.log("Exists");
    this.student2 = new Student;
    this.student2.firstName = "Thor";
  }

  fillStudents() {
    this.students.push(this.student1);
    this.students.push(this.student2);
  }
}