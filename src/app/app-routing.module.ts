import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaycompltasksComponent } from './displaycompltasks/displaycompltasks.component';
import { DisplayincompltasksComponent } from './displayincompltasks/displayincompltasks.component';
import { DisplaytasksComponent } from './displaytasks/displaytasks.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TasklistComponent } from './tasklist/tasklist.component';

const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
    path:'tasklist',component:TasklistComponent
  },
  {
    path:'displaytasks',component:DisplaytasksComponent
  },
  {
    path:'displaycompltasks',component:DisplaycompltasksComponent
  },
  {
    path:'displayincompltasks',component:DisplayincompltasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
