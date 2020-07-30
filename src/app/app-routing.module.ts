import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStudComponent } from './add-stud/add-stud.component';
import { ViewStudComponent } from './view-stud/view-stud.component';
import { UpdateStudComponent } from './update-stud/update-stud.component';
import { DeleteStudComponent } from './delete-stud/delete-stud.component';
import { SearchStudComponent } from './search-stud/search-stud.component'


const routes: Routes = [
  {path: '', component: AddStudComponent},
  {path: 'view', component: ViewStudComponent, children:[
    {path: 'update', component: UpdateStudComponent}
  ]},
  {path: 'delete', component: DeleteStudComponent},
  {path: 'search', component: SearchStudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
