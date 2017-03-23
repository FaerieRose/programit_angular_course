import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { StudentComponent }      from './student.component';
import { StudentCreateComponent }      from './student_create.component';

const routes: Routes = [
  { path: '', redirectTo: 'stud', pathMatch: 'full'}, // Checken of werkt
  { path: 'stud',       component: StudentComponent},
  { path: 'create', component: StudentCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}