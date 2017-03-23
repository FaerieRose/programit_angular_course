import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { VerenigingComponent }   from './vereniging/vereniging.component';

import './rxjs-extensions';

const routes: Routes = [
  { path: '', redirectTo: '/student/stud', pathMatch: 'full' },
  { path: 'student',          loadChildren: 'app/student/student.module#StudentModule' },
  { path: 'vereniging',       component: VerenigingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
