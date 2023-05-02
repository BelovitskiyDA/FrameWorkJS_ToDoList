import { Component, OnInit,Injectable  } from '@angular/core';
import { TaskComponent } from './task/task.component';


export interface Task
{
  id: number;
  text: string;
  isDone: boolean;
}

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  maxId = 0;
  tasks: Task[] = [];

  ngOnInit()
  {
    this.tasks = JSON.parse(localStorage.getItem("dataSource") || '[]');
    this.maxId = 0;
    this.tasks.forEach(i => {if(i.id > this.maxId) this.maxId = i.id})
  }

  value = '';

  Add(){
    this.tasks.push({id:++this.maxId, text: this.value, isDone : false})
    this.value = '';
    localStorage.setItem('dataSource', JSON.stringify(this.tasks));
  }

  Clear(){
    this.tasks = [];
    this.value = '';
    this.maxId = 0;
    localStorage.setItem('dataSource', JSON.stringify(this.tasks));
  }
}
