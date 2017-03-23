import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { StudentComponent }      from './student/student.component';
import { VerenigingComponent }   from './vereniging/vereniging.component';

import './rxjs-extensions';

const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'student',          component: StudentComponent },
  { path: 'vereniging',       component: VerenigingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
