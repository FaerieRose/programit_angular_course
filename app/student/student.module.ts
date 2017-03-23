import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

import { StudentComponent }       from './student.component';
import { StudentCreateComponent } from './student_create.component';
import { StudentRoutingModule }   from './student-routing.module'

@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    StudentRoutingModule
  ],
  declarations: [
    StudentComponent,
    StudentCreateComponent
  ]
})
export class StudentModule { }