import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {


  constructor(private dataService:DataService,private router:Router){}

  newUser:any={
    name:'',
    email:'',
    password:''
  };

  addUser(){
    let formData = new FormData()
    formData.append('name',this.newUser.name)
    formData.append('email',this.newUser.email)
    formData.append('password',this.newUser.password)

    this.dataService.addUser(formData).subscribe(res =>{
      console.log(res)
      this.router.navigate(['/login'])
    })

  }

}
