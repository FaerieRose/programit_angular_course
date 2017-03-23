import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { StudentComponent }      from './student.component';

const routes: Routes = [
  { path: '', redirectTo: 'stud', pathMatch: 'full'}, // Checken of werkt
  { path: 'stud', component: StudentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}