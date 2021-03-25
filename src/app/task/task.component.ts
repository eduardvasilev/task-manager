import { Component, Input, OnInit, TemplateRef} from '@angular/core';
import { Task } from "../model/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit {

  @Input()
  task: Task = new Task;
  isEdit: boolean = false;

  @Input() isDone?: boolean = this.task.isDone;
  constructor() { }

  ngOnInit(): void {
  }

  public updateTaskStatus(event: Event, task: Task): void
  {
    task.isDone = !task.isDone;
  }

  public initEdit(event: Event): void
  {
    this.isEdit = !this.isEdit;
  }
}
