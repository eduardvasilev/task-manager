import { Component, Input, OnInit } from '@angular/core';
import { Task } from "../model/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit {

  @Input()
  task: Task = new Task;

  @Input() isDone?: boolean = this.task.isDone;
  constructor() { }

  ngOnInit(): void {
  }

  public updateTaskStatus(event: Event, task: Task): void
  {
    task.isDone = !task.isDone;
  }
}
