import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';
import { TaskService } from '../../service/task-service.service';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from "../task-card/task-card.component";

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css'],
    standalone: true,
    imports: [CommonModule, TaskCardComponent]
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.findAll().subscribe((data: Task[]) => {
      if(data === undefined) {return}
      this.tasks = data;
      console.log(this.tasks)
    });
  }
}
