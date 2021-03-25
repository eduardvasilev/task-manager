import { Component, OnInit } from '@angular/core';
import { Task } from "../model/task";

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(value: string): void
  {
    this.tasks.push({description: value, isDone: false});
  }

  onDeleted(task: Task)
  {
    const index = this.tasks.indexOf(task, 0);
    if (index > -1)
    {
      this.tasks.splice(index, 1);
    }
  }
}
