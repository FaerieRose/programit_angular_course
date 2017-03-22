import { Injectable } from '@angular/core';
import { Student }    from './student';

@Injectable()
export class StudentService {

  getStudent(id: number) {
    let student: Student = new Student;
    if (id === 1) {
      student.firstName = "Jynn";
      student.lastName = "Erso";
    } else if (id === 2) {
      student.firstName = "Frodo";
      student.lastName = "Baggins";
    }
    return student;
  }
}