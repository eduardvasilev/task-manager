import { Injectable } from '@angular/core';
import {TASKS} from './mock-tasks';
import {Task} from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService{

  constructor() { }
  
  addTask(task: Task)
  {
    TASKS.push(task);
  }

  getTasks(includeCompleted: boolean = true) {
    return TASKS.filter(task => includeCompleted || !task.isDone);
  }
}
