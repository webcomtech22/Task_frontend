import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private dataService:DataService,private router:Router,private authService:AuthService){}

  loginData : any={
    email:'',
    password:''
  }

  login(){
      let formData = new FormData()
      // console.log(this.loginData.email)
      // console.log(this.loginData.password)
      formData.append('email',this.loginData.email)
      formData.append('password',this.loginData.password)
      this.dataService.loginUser(formData).subscribe((res:any) => {
        console.log('Login Success:', res);
        if(res && res.token){
          this.authService.setToken(res.token);
          this.router.navigate(['/tasks'])
        }
      },(error)=>{
  
        if (error.status === 400) {
         alert('Invalid email or password. Please try again.');
        } else if (error.status >= 500) {
          alert('invalid email or password');
          // alert('Server error occurred. Please try again later.');
        } else {
          alert('Unexpected error occurred. Please try again.');
        }
        // console.error('Login Error:', error);
        this.router.navigate(['/login']);
      })
  }

}
