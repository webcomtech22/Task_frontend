import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
// import { TaskDetailComponent } from './task-detail/task-detail.component';
import { DetailComponent } from './detail/detail.component';
import { SavetaskComponent } from './savetask/savetask.component';
import { EdittaskComponent } from './edittask/edittask.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    TasksComponent,
    // TaskDetailComponent,
    DetailComponent,
    SavetaskComponent,
    EdittaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
