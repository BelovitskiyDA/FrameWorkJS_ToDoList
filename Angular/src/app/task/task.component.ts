import { Component, Input } from '@angular/core';
import {Task} from '../app.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  
  /*title: string;
  text: string;
  isDone: boolean;*/
  @Input() task!: Task;

  /*constructor(title:string,text:string){
    this.title = title;
    this.text = text;
    this.isDone = false;
  }*/
}
