import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TasksComponent } from './tasks/tasks.component';
import { AuthGuardService } from './auth-guard.service';
import { DetailComponent } from './detail/detail.component';
import { SavetaskComponent } from './savetask/savetask.component';
import { EdittaskComponent } from './edittask/edittask.component';


const routes: Routes = [
  {path : "",redirectTo:'login',pathMatch:'full'},
  {path: "login",component:LoginComponent},
  {path: "sign_up",component:SignUpComponent},
  {path: "tasks", component:TasksComponent,canActivate:[AuthGuardService]},
  {path: "detail/:id",component:DetailComponent},
  {path: "savetask",component:SavetaskComponent},
  {path: "edittask/:id",component:EdittaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
