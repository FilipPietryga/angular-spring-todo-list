import { Component, Input } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input("task") task!: Task;
  taskInput!: Task;

  ngOnInit() {
    if(this.taskInput === undefined) {return}
    this.task = {
      id: this.taskInput.id,
      title: this.taskInput.title,
    }
  }
}
