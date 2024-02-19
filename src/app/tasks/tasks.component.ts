import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{

  constructor(private dataService:DataService,private authService:AuthService,private router:Router){}

  ngOnInit(): void {
    this.getTasks()

  }
  searchQuery: string = '';
  task:any[]=[];
  tasks:any;
  filterTask:any[] =[];
  getTasks(){
    this.dataService.getTasks().subscribe((res:any)=>{
      console.log(res)
      this.tasks = res ;
      this.filterTask = this.tasks;
    })

  }

  searchTask(){
    return this.task.filter(task => task.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  changeEvent(event:any){
    const filter = (event.target as HTMLSelectElement).value;
    if(filter === "All"){
      this.showAll()
    }else if(filter === "Active"){
      this.showActive()
    }else if(filter === "Completed"){
      this.showCompleted()
    }
  }

  showCompleted(){
    this.filterTask = this.tasks.filter((obj:any) => obj.state === 'completed')
  }
  showActive(){
    this.filterTask = this.tasks.filter((obj:any) => obj.state === 'active')
  }
  showAll(){
    this.filterTask = this.tasks;
  }

  toggleCompletion(task:any){
    task.state = task.state === 'completed' ? 'active' : 'completed';
    this.dataService.editState(task.id,task.state).subscribe((res)=>{
      console.log(res)
    })
  }

  logout(){
    this.dataService.logout().subscribe((res)=>{
      this.authService.removeToken()
      this.router.navigate(['/login'])
    })  
  }

}

