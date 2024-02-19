import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  constructor(private dataService:DataService,private authService:AuthService,private route:ActivatedRoute,
    private router: Router){}

  singleTask:any={
    title:'',
    description:'',
    state:''

  };
  id:any;
  ngOnInit(): void {
   this.id =this.route.snapshot.params['id']
   this.getSingleTask()
    
  }

getSingleTask(){
  this.dataService.getSingleTask(this.id).subscribe((res)=>{
    console.log(res)
    this.singleTask = res
  })
}

deleteTask(){
  this.dataService.deleteTask(this.id).subscribe(res=>{
    console.log(res)

    this.router.navigate(['/tasks'])
  })
}


}