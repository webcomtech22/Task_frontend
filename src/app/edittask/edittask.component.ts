import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  taskData:any={
    title:'',
    description:'',
    state:''
  };
  id:any;
constructor(private dataService:DataService, private authService:AuthService, private route:ActivatedRoute){}

ngOnInit(): void {
  this.id = this.route.snapshot.params['id']
  this.getSingleTask()
}

editTask(){
  let formData = new FormData()

  formData.append("title",this.taskData.title)
  formData.append("description",this.taskData.description)
  formData.append("state",this.taskData.state)

  this.dataService.updateTask(this.id,formData).subscribe(res=>{
    console.log(res)
    
  })
}

getSingleTask(){
  this.dataService.getSingleTask(this.id).subscribe(res=>{
    this.taskData = res
  })
}

}
