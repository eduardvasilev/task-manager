import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
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
  @Output() deleted = new EventEmitter<Task>();
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

  public delete(event: Event, task: Task): void
  {
    this.deleted.emit(task);
  }
}
