import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers        } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import { Student }        from './student';

@Injectable()
export class StudentService {

  constructor(private http: Http) { }

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

  private headers = new Headers({ 'Content-Type': 'application/json' }); 
  postStudent(student: Student) {
    console.log(JSON.stringify(student));
    let jsonStr = JSON.stringify(student);
    return this.http.post("http://localhost:8081/api/students", JSON.stringify(student), { headers: this.headers }).map(res => {
      console.log(res);
      console.log("New student id = " + res.text());
      return res.text();
    });
  }
  
  getStudentById(id: number): Observable<Student> {
    return this.http.get("http://localhost:8081/api/students/" + id).map(res => res.json());
  }

  getStudents(): Observable<Student[]> {
    return this.http.get("http://localhost:8081/api/students").map(res => res.json());
  }


}