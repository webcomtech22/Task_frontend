import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-savetask',
  templateUrl: './savetask.component.html',
  styleUrls: ['./savetask.component.css']
})
export class SavetaskComponent {

taskData:any={
  title:'',
  description:'',
  state:''
}

constructor(private dataService:DataService,private authService:AuthService){}
  addTask(){
    let formdata = new FormData()
    formdata.append("title",this.taskData.title)
    formdata.append("description",this.taskData.description)
    formdata.append("state",this.taskData.state)
    
    this.dataService.addTask(formdata).subscribe((res)=>{
      console.log(res)
      this.taskData = res
    })

  }
}
