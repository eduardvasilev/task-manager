import { Component, OnInit } from '@angular/core';
import { Task } from "../model/task";
import { TaskService } from '../services/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];
  newTask: string ="";
  includeCompleted: boolean = true;
  taskService: TaskService;
  
  constructor(taskService: TaskService) 
  { 
    this.tasks = taskService.getTasks();
    this.taskService = taskService;
  }

  ngOnInit(): void {
  }

  addTask(value: string): void
  {
    this.newTask = "";

    const task: Task = {description: value, isDone: false};
    this.taskService.addTask(task)
    this.tasks.push(task);
  }

  onDeleted(task: Task)
  {
    const index = this.tasks.indexOf(task, 0);
    if (index > -1)
    {
      this.tasks.splice(index, 1);
    }
  }

  updateCompletedVisibility()
  {
    this.includeCompleted = !this.includeCompleted;
    this.tasks = this.taskService.getTasks(this.includeCompleted);
  }
}
