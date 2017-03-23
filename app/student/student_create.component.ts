import { Component }      from '@angular/core';

import { Student }        from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'my-student',  
  templateUrl: 'app/student/student_create.component.html',
  styleUrls: [ 'app/student/student.component.css' ],
  providers: [ StudentService ]
})
export class StudentCreateComponent  { 
  student: Student = new Student;
  studId: number = 0;

  constructor(private studentService: StudentService) {
  }

  postStudent() {
    this.studentService.postStudent(this.student).subscribe(txt => {
      console.log(txt);
    });
  }
}